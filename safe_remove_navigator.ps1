# Conservative PowerShell script - Only removes SIMPLE navigator.onLine patterns
# This script is much safer and only targets specific, well-understood patterns

$Files = $args

Write-Host "Starting conservative navigator.onLine removal..." -ForegroundColor Green
Write-Host "Processing $($Files.Count) files..." -ForegroundColor Cyan

$totalFiles = 0
$totalReplacements = 0

foreach ($filePath in $Files) {
    if (-not (Test-Path $filePath)) {
        Write-Host "File not found: $filePath" -ForegroundColor Red
        continue
    }
    
    $content = Get-Content $filePath -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    # Pattern 1: Simple if (navigator.onLine) with try-catch inside
    # BEFORE: if (navigator.onLine) { try { ... } catch { ... } }
    # AFTER: try { ... } catch { ... }
    $pattern1 = 'if\s*\(\s*navigator\.onLine\s*\)\s*\{\s*(try\s*\{[^\}]+\}\s*catch\s*[^\}]*\{[^\}]+\})\s*\}'
    while ($content -match $pattern1) {
        $content = $content -replace $pattern1, '$1'
        $fileReplacements++
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $filePath -Value $content -NoNewline
        $totalFiles++
        $totalReplacements += $fileReplacements
        Write-Host "Modified: $(Split-Path $filePath -Leaf) - $fileReplacements replacements" -ForegroundColor Yellow
    } else {
        Write-Host "No changes: $(Split-Path $filePath -Leaf)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Process Complete!" -ForegroundColor Green
Write-Host "Files Modified: $totalFiles" -ForegroundColor Cyan
Write-Host "Total Replacements: $totalReplacements" -ForegroundColor Cyan
