Add-Type -AssemblyName System.Drawing

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$srcPath = "$root\src\js\img\GG-2 copy.png"
$srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)

$cropX = 223
$cropY = 183
$cropW = 627
$cropH = 344

$logoBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gCrop = [System.Drawing.Graphics]::FromImage($logoBmp)
$gCrop.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gCrop.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gCrop.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gCrop.DrawImage($srcImg, [System.Drawing.Rectangle]::new(0, 0, $cropW, $cropH), $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
$gCrop.Dispose()
$srcImg.Dispose()

$splashFiles = Get-ChildItem -Path "$root\android\app\src\main\res" -Filter "splash.png" -Recurse

foreach ($sf in $splashFiles) {
    $existing = [System.Drawing.Bitmap]::FromFile($sf.FullName)
    $w = $existing.Width
    $h = $existing.Height
    $existing.Dispose()

    $newSplash = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($newSplash)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    # Clean white background
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.FillRectangle($whiteBrush, 0, 0, $w, $h)
    $whiteBrush.Dispose()

    # Scale logo nicely (e.g. 40% of the smaller dimension)
    $minDim = [Math]::Min($w, $h)
    $targetW = [int]($minDim * 0.45)
    $targetH = [int]($targetW * ($cropH / $cropW))
    $posX = [int](($w - $targetW) / 2)
    $posY = [int](($h - $targetH) / 2)

    $g.DrawImage($logoBmp, [System.Drawing.Rectangle]::new($posX, $posY, $targetW, $targetH), 0, 0, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $newSplash.Save($sf.FullName, [System.Drawing.Imaging.ImageFormat]::Png)
    $newSplash.Dispose()
    Write-Host "Updated splash: $($sf.FullName) ($w x $h)"
}

$logoBmp.Dispose()
Write-Host "All splash screens updated with white background and blue GG logo!"
