$ErrorActionPreference = "Stop"

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$androidDir = "$root\android"

# Set environment paths
$env:JAVA_HOME = "C:\Users\GG\.jdks\jbr-21.0.11"
$env:ANDROID_HOME = "C:\Users\GG\AppData\Local\Android\Sdk"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

Write-Host "=== 1. COMPILING WEB BUNDLE & SYNCING CAPACITOR ANDROID ==="
Set-Location $root
npm run build:web
npx cap sync android

Write-Host "=== 2. COMPILING APK VIA GRADLE ==="
Set-Location $androidDir

# Ensure gradlew.bat is executable
if (-not (Test-Path "gradlew.bat")) {
    Write-Error "gradlew.bat not found in $androidDir"
}

# Run assembleDebug
cmd.exe /c "gradlew.bat assembleDebug"

if ($LASTEXITCODE -ne 0) {
    Write-Error "Gradle build failed with exit code $LASTEXITCODE"
}

Write-Host "=== 3. VERIFYING GENERATED APK ==="
$apkPaths = @(
    "$androidDir\app\build\outputs\apk\debug\app-debug.apk",
    "$androidDir\app\build\outputs\apk\debug\app-universal-debug.apk"
)

$foundApk = $null
foreach ($p in $apkPaths) {
    if (Test-Path $p) {
        $foundApk = Get-Item $p
        break
    }
}

if ($foundApk) {
    $sizeMb = [math]::Round($foundApk.Length / 1MB, 2)
    Write-Host "SUCCESS: APK Generated Successfully!" -ForegroundColor Green
    Write-Host "APK Location: $($foundApk.FullName)" -ForegroundColor Cyan
    Write-Host "APK Size: $sizeMb MB" -ForegroundColor Cyan
    Write-Host "Last Modified: $($foundApk.LastWriteTime)" -ForegroundColor Cyan
} else {
    Write-Error "APK file was not found in the output directory."
}
