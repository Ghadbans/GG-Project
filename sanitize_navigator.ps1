# Sanitization Script - Remove all navigator.onLine checks
# This script removes navigator.onLine conditional blocks from all files

$rootPath = "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1"
$filesProcessed = 0
$checksRemoved = 0

Write-Host "=== Starting Navigator.onLine Removal ===" -ForegroundColor Cyan
Write-Host ""

# Get all JS files with navigator.onLine
$files = Get-ChildItem -Path $rootPath -Recurse -Filter "*.js" | 
    Where-Object { (Get-Content $_.FullName -Raw) -match "navigator\.onLine" }

Write-Host "Found $($files.Count) files with navigator.onLine checks" -ForegroundColor Yellow
Write-Host ""

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)" -ForegroundColor Green
    
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Pattern 1: Remove if (navigator.onLine) blocks, keep the try-catch content
    $content = $content -replace '(?s)if\s*\(\s*navigator\.onLine\s*\)\s*\{(\s*try\s*\{[^}]*\}[^}]*catch[^}]*\}[^}]*)\}\s*(?:else\s*\{[^}]*\})?', '$1'
    
    # Pattern 2: Remove navigator.onLine from useState
    $content = $content -replace 'useState\(\s*!?navigator\.onLine\s*\)', 'useState(true)'
    
    # Pattern 3: Remove online/offline event listeners
    $content = $content -replace "(?s)const\s+handleOnline\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};?\s*", ""
    $content = $content -replace "(?s)const\s+handleOffline\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};?\s*", ""
    $content = $content -replace "window\.addEventListener\('online',\s*handleOnline\);?\s*", ""
    $content = $content -replace "window\.removeEventListener\('online',\s*handleOnline\);?\s*", ""
    $content = $content -replace "window\.addEventListener\('offline',\s*handleOffline\);?\s*", ""
    $content = $content -replace "window\.removeEventListener\('offline',\s*handleOffline\);?\s*", ""
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $filesProcessed++
        Write-Host "  ✓ Updated" -ForegroundColor Green
    } else {
        Write-Host "  - No changes needed" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=== Sanitization Complete ===" -ForegroundColor Cyan
Write-Host "Files processed: $filesProcessed" -ForegroundColor Green
Write-Host ""
