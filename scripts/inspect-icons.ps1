Add-Type -AssemblyName System.Drawing

$root = "D:\GG\GG-Managment2026\ancient-kepler Pro"
$f = "$root\src\js\img\GG-2 copy.png"
$img = [System.Drawing.Bitmap]::FromFile($f)
$corner = $img.GetPixel(0, 0)
Write-Host "Corner Alpha: $($corner.A) R: $($corner.R) G: $($corner.G) B: $($corner.B)"

# Find bounding box of non-transparent pixels
$minX = $img.Width; $minY = $img.Height; $maxX = 0; $maxY = 0
for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        $p = $img.GetPixel($x, $y)
        if ($p.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
Write-Host "Bounding box: ($minX, $minY) to ($maxX, $maxY) -> Width: $($maxX - $minX) Height: $($maxY - $minY)"
$img.Dispose()
