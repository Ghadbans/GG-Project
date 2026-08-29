# Check Android SDK and Java
$sdkPaths = @(
    "$env:LOCALAPPDATA\Android\Sdk",
    "$env:USERPROFILE\AppData\Local\Android\Sdk",
    "C:\Android\sdk",
    "D:\Android\sdk"
)

$foundSdk = ""
foreach ($p in $sdkPaths) {
    if (Test-Path $p) {
        $foundSdk = $p
        Write-Host "Found Android SDK: $p"
        break
    }
}

# Check JDK / JBR paths
$jdkPaths = @(
    "$env:JAVA_HOME",
    "C:\Program Files\Android\Android Studio\jbr",
    "C:\Program Files\Android\Android Studio\jre",
    "C:\Program Files\Java\jdk*",
    "C:\Program Files\Eclipse Adoptium\jdk*"
)

$foundJdk = ""
foreach ($j in $jdkPaths) {
    if ($j -and (Test-Path $j)) {
        $resolved = (Resolve-Path $j)[0].Path
        $foundJdk = $resolved
        Write-Host "Found JDK / JBR: $resolved"
        break
    }
}

# Check/Set local.properties in android folder
$androidDir = "D:\GG\GG-Managment2026\ancient-kepler Pro\android"
$localProps = "$androidDir\local.properties"

if ($foundSdk) {
    $escapedSdk = $foundSdk.Replace("\", "\\").Replace(":", "\:")
    "sdk.dir=$escapedSdk" | Out-File -FilePath $localProps -Encoding ascii
    Write-Host "Configured $localProps with sdk.dir=$escapedSdk"
} else {
    Write-Host "Warning: Android SDK path not automatically detected."
}

if (Test-Path $localProps) {
    Get-Content $localProps
}
