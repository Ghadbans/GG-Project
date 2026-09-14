Add-Type -AssemblyName System.Drawing

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$srcPath = "$root\src\js\img\GG-2 copy.png"
$srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)

# Bounding box of the GG logo in GG-2 copy.png
$cropX = 223
$cropY = 183
$cropW = 627
$cropH = 344

# Create a cropped bitmap of just the logo
$logoBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gCrop = [System.Drawing.Graphics]::FromImage($logoBmp)
$gCrop.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gCrop.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gCrop.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gCrop.DrawImage($srcImg, [System.Drawing.Rectangle]::new(0, 0, $cropW, $cropH), $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
$gCrop.Dispose()
$srcImg.Dispose()

function Create-IconBitmap {
    param(
        [int]$size,
        [string]$bgType, # 'transparent', 'white-square', 'white-circle'
        [double]$scaleRatio = 0.65
    )

    $targetBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($targetBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    if ($bgType -eq 'white-square') {
        $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
        $g.FillRectangle($whiteBrush, 0, 0, $size, $size)
        $whiteBrush.Dispose()
    } elseif ($bgType -eq 'white-circle') {
        $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
        $g.FillEllipse($whiteBrush, 0, 0, $size, $size)
        $whiteBrush.Dispose()
    }

    # Calculate logo placement preserving aspect ratio
    $targetW = [int]($size * $scaleRatio)
    $targetH = [int]($targetW * ($cropH / $cropW))
    $posX = [int](($size - $targetW) / 2)
    $posY = [int](($size - $targetH) / 2)

    $g.DrawImage($logoBmp, [System.Drawing.Rectangle]::new($posX, $posY, $targetW, $targetH), 0, 0, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    return $targetBmp
}

# Android mipmap densities definition
$densities = @(
    @{ name = "mipmap-mdpi";    legacySize = 48;  fgSize = 108 },
    @{ name = "mipmap-hdpi";    legacySize = 72;  fgSize = 162 },
    @{ name = "mipmap-xhdpi";   legacySize = 96;  fgSize = 216 },
    @{ name = "mipmap-xxhdpi";  legacySize = 144; fgSize = 324 },
    @{ name = "mipmap-xxxhdpi"; legacySize = 192; fgSize = 432 }
)

$resDir = "$root\android\app\src\main\res"

foreach ($d in $densities) {
    $folder = Join-Path $resDir $d.name
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }

    # 1. Standard / Legacy Icon (white square)
    $legacyIcon = Create-IconBitmap $d.legacySize 'white-square' 0.65
    $legacyPath = Join-Path $folder "ic_launcher.png"
    $legacyIcon.Save($legacyPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $legacyIcon.Dispose()

    # 2. Round Icon (white circle)
    $roundIcon = Create-IconBitmap $d.legacySize 'white-circle' 0.65
    $roundPath = Join-Path $folder "ic_launcher_round.png"
    $roundIcon.Save($roundPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $roundIcon.Dispose()

    # 3. Adaptive Foreground Icon (transparent with logo in 60% safe zone)
    $fgIcon = Create-IconBitmap $d.fgSize 'transparent' 0.55
    $fgPath = Join-Path $folder "ic_launcher_foreground.png"
    $fgIcon.Save($fgPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $fgIcon.Dispose()

    Write-Host "Updated icons in $($d.name)"
}

# Root Icon.png for desktop / packaging
$rootIcon = Create-IconBitmap 512 'white-square' 0.65
$rootIcon.Save("$root\Icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$rootIcon.Dispose()
Write-Host "Updated root Icon.png"

# Brain preview
$previewDir = "C:\Users\GG\.gemini\antigravity\brain\386f76b1-d1fd-4ff1-aa03-37a6c31f896f"
$previewBmp = Create-IconBitmap 512 'white-square' 0.65
$previewBmp.Save("$previewDir\app_icon_preview_white_bg.png", [System.Drawing.Imaging.ImageFormat]::Png)
$previewBmp.Dispose()

$logoBmp.Dispose()
Write-Host "All icons generated successfully!"
