$ErrorActionPreference = "Stop"

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$androidDir = "$root\android"

# 1. Ensure android directory is cleanly initialized
if (Test-Path "$androidDir") {
    Write-Host "Removing incomplete android folder..."
    Remove-Item -Recurse -Force "$androidDir"
}

Write-Host "Adding clean Capacitor android platform..."
Set-Location $root
npx cap add android

# 2. Configure local.properties
$sdkPath = "C:\Users\GG\AppData\Local\Android\Sdk"
$escapedSdk = $sdkPath.Replace("\", "\\").Replace(":", "\:")
"sdk.dir=$escapedSdk" | Out-File -FilePath "$androidDir\local.properties" -Encoding ascii
Write-Host "Configured android\local.properties"

# 3. Generate Android launcher icons from official emblem
Add-Type -AssemblyName System.Drawing
$iconSrcPath = "C:\Users\GG\.gemini\antigravity\brain\386f76b1-d1fd-4ff1-aa03-37a6c31f896f\.user_uploaded\media_1787983151342.png"

if (Test-Path $iconSrcPath) {
    $srcBitmap = [System.Drawing.Bitmap]::FromFile($iconSrcPath)
    
    $densities = @(
        @{ folder = "mipmap-mdpi"; size = 48 },
        @{ folder = "mipmap-hdpi"; size = 72 },
        @{ folder = "mipmap-xhdpi"; size = 96 },
        @{ folder = "mipmap-xxhdpi"; size = 144 },
        @{ folder = "mipmap-xxxhdpi"; size = 192 }
    )

    foreach ($d in $densities) {
        $folderPath = "$androidDir\app\src\main\res\$($d.folder)"
        if (-not (Test-Path $folderPath)) {
            New-Item -ItemType Directory -Force -Path $folderPath | Out-Null
        }

        # Create launcher icon with nice dark blue background and centered emblem
        $targetBmp = New-Object System.Drawing.Bitmap($d.size, $d.size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $g = [System.Drawing.Graphics]::FromImage($targetBmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

        # Dark blue background
        $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 48, 54, 138))
        $g.FillRectangle($brush, 0, 0, $d.size, $d.size)
        $brush.Dispose()

        # Draw emblem in center (with 15% padding)
        $pad = [int]($d.size * 0.15)
        $innerW = $d.size - ($pad * 2)
        $aspect = $srcBitmap.Width / $srcBitmap.Height
        $innerH = [int]($innerW / $aspect)
        $innerY = [int](($d.size - $innerH) / 2)

        $g.DrawImage($srcBitmap, $pad, $innerY, $innerW, $innerH)
        $g.Dispose()

        # Save ic_launcher.png, ic_launcher_round.png, ic_launcher_foreground.png
        $targetBmp.Save("$folderPath\ic_launcher.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $targetBmp.Save("$folderPath\ic_launcher_round.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $targetBmp.Save("$folderPath\ic_launcher_foreground.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $targetBmp.Dispose()
    }
    $srcBitmap.Dispose()
    Write-Host "Generated official Global Gate app icons across all mipmap folders."
}

# 4. Sync web build
Write-Host "Syncing web assets..."
npx cap sync android

# 5. Build APK via Gradle Wrapper
Write-Host "Compiling APK via Gradle..."
Set-Location $androidDir
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "C:\Users\GG\AppData\Local\Android\Sdk"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

cmd.exe /c "gradlew.bat assembleDebug"

if ($LASTEXITCODE -ne 0) {
    Write-Error "Gradle build failed with exit code $LASTEXITCODE"
}

# 6. Verify and output generated APK details
$apkPath = "$androidDir\app\build\outputs\apk\debug\app-debug.apk"

if (Test-Path $apkPath) {
    $apk = Get-Item $apkPath
    $sizeMb = [math]::Round($apk.Length / 1MB, 2)
    Write-Host "`n=======================================================" -ForegroundColor Green
    Write-Host "BUILD SUCCESSFUL!" -ForegroundColor Green
    Write-Host "APK File: $($apk.FullName)" -ForegroundColor Cyan
    Write-Host "APK Size: $sizeMb MB ($($apk.Length) bytes)" -ForegroundColor Cyan
    Write-Host "Build Timestamp: $($apk.LastWriteTime)" -ForegroundColor Cyan
    Write-Host "=======================================================`n" -ForegroundColor Green
} else {
    Write-Error "APK file not found at $apkPath"
}
