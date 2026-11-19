param(
    [switch]$SkipWebBuild
)

$ErrorActionPreference = "Stop"

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$androidDir = "$root\android"

# Sync Android versionCode and versionName from root package.json
$pkgMeta = Get-Content "$root\package.json" | ConvertFrom-Json
$verStr = $pkgMeta.version
$verParts = $verStr.Split('.')
$verCode = ([int]$verParts[0] * 10000) + ([int]$verParts[1] * 100) + ([int]$verParts[2])
$gradlePath = "$androidDir\app\build.gradle"
if (Test-Path $gradlePath) {
    $gradleContent = Get-Content $gradlePath -Raw
    $gradleContent = $gradleContent -replace 'versionCode\s+\d+', "versionCode $verCode"
    $gradleContent = $gradleContent -replace 'versionName\s+"[^"]+"', "versionName `"$verStr`""
    Set-Content -Path $gradlePath -Value $gradleContent -NoNewline
    Write-Host "Synced Android build.gradle -> versionName $verStr (versionCode $verCode)" -ForegroundColor Cyan
}

# Set environment paths (prefer Java 21 / 17 over Java 25 for AGP compatibility)
$possibleJavaHomes = @(
    "C:\Users\GG\.jdks\jbr-21.0.11",
    "C:\Program Files\Java\jdk-21",
    "C:\Program Files\Java\jdk-17",
    "C:\Program Files\Android\Android Studio\jbr"
)
foreach ($jh in $possibleJavaHomes) {
    if (Test-Path "$jh\bin\java.exe") {
        $env:JAVA_HOME = $jh
        break
    }
}
if (-not $env:JAVA_HOME) {
    $javaCmd = Get-Command java -ErrorAction SilentlyContinue
    if ($javaCmd) {
        $env:JAVA_HOME = Split-Path (Split-Path $javaCmd.Source)
    }
}
$env:ANDROID_HOME = "C:\Users\GG\AppData\Local\Android\Sdk"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

if (-not $SkipWebBuild) {
    Write-Host "=== 1. COMPILING WEB BUNDLE & SYNCING CAPACITOR ANDROID ==="
    Set-Location $root
    npm run build:web
    npx cap sync android
} else {
    Write-Host "=== 1. SYNCING CAPACITOR ANDROID (SKIPPING WEB BUILD) ==="
    Set-Location $root
    npx cap sync android
}

Write-Host "=== 2. COMPILING APK VIA GRADLE ==="
Set-Location $androidDir

# Ensure gradlew.bat is executable
if (-not (Test-Path "gradlew.bat")) {
    Write-Error "gradlew.bat not found in $androidDir"
}

# Run clean assembleDebug with no-daemon for reliability
cmd.exe /c "gradlew.bat --no-daemon clean assembleDebug"

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
    $pkg = Get-Content "$root\package.json" | ConvertFrom-Json
    $destApk = "$root\server\public\downloads\GlobalGate.apk"
    $verApk = "$root\server\public\downloads\GlobalGate-v$($pkg.version).apk"
    Copy-Item -Path $foundApk.FullName -Destination $verApk -Force
    Write-Host "COPIED TO SERVER DOWNLOADS: $verApk" -ForegroundColor Green
    Copy-Item -Path $foundApk.FullName -Destination $destApk -Force
    Write-Host "COPIED TO SERVER DOWNLOADS: $destApk" -ForegroundColor Green
} else {
    Write-Error "APK file was not found in the output directory."
}
