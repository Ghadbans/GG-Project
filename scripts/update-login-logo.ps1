Add-Type -AssemblyName System.Drawing

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$srcPath = "$root\src\js\img\GG-2 copy.png"
$srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)

$cropX = 223
$cropY = 183
$cropW = 627
$cropH = 344

$targetW = 320
$targetH = [int]($targetW * ($cropH / $cropW))

$logoBmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($logoBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

$g.DrawImage($srcImg, [System.Drawing.Rectangle]::new(0, 0, $targetW, $targetH), $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$srcImg.Dispose()

$logoBmp.Save("$root\src\js\img\Image1.png", [System.Drawing.Imaging.ImageFormat]::Png)
$logoBmp.Dispose()

Write-Host "Updated src\js\img\Image1.png with crisp blue GG logo!"
