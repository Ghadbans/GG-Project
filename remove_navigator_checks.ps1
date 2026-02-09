# Enhanced PowerShell script to remove navigator.onLine checks
# This script removes the if (navigator.onLine) wrapper while preserving inner logic

param(
    [string]$TargetPath = "src\js\AdminView1",
    [string]$FilePattern = "*.js"
)

Write-Host "Starting navigator.onLine removal process..." -ForegroundColor Green
Write-Host "Target Path: $TargetPath" -ForegroundColor Cyan

$files = Get-ChildItem -Path $TargetPath -Filter $FilePattern -File -Recurse

$totalFiles = 0
$totalReplacements = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    # Pattern 1: Remove simple if (navigator.onLine) blocks with commented else
    # This handles: if (navigator.onLine) { ... }/* else { ... }*/
    $pattern1 = '(?s)if\s*\(\s*navigator\.onLine\s*\)\s*\{([^}]*)\}\/\*\s*else\s*\{[^}]*\}\*\/'
    if ($content -match $pattern1) {
        $content = $content -replace $pattern1, '$1'
        $fileReplacements++
    }
    
    # Pattern 2: Remove if (navigator.onLine) with nested try-catch and commented else
    # This handles multi-line blocks with try-catch inside
    $pattern2 = '(?s)if\s*\(\s*navigator\.onLine\s*\)\s*\{\s*(try\s*\{[^}]*\}\s*catch[^}]*\{[^}]*\})\s*\}\/\*\s*else\s*\{[^}]*\}\*\/'
    while ($content -match $pattern2) {
        $content = $content -replace $pattern2, '$1'
        $fileReplacements++
    }
    
    # Pattern 3: Remove standalone if (navigator.onLine) without else block
    # This is more aggressive - removes the if wrapper entirely
    $pattern3 = '(?s)if\s*\(\s*navigator\.onLine\s*\)\s*\{\s*((?:(?!\bif\b|\belse\b).)*?)\s*\}'
    $iterations = 0
    $maxIterations = 50
    while ($content -match $pattern3 -and $iterations -lt $maxIterations) {
        $match = [regex]::Match($content, $pattern3)
        if ($match.Success) {
            $innerContent = $match.Groups[1].Value
            # Only replace if the inner content doesn't contain another if/else
            if ($innerContent -notmatch '\bif\s*\(' -and $innerContent -notmatch '\belse\b') {
                $content = $content -replace [regex]::Escape($match.Value), $innerContent
                $fileReplacements++
            } else {
                break
            }
        }
        $iterations++
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $totalFiles++
        $totalReplacements += $fileReplacements
        Write-Host "Modified: $($file.Name) - $fileReplacements replacements" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Process Complete!" -ForegroundColor Green
Write-Host "Files Modified: $totalFiles" -ForegroundColor Cyan
Write-Host "Total Replacements: $totalReplacements" -ForegroundColor Cyan
