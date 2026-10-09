param(
    [string]$OutputDirectory = ""
)

$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'

if ([string]::IsNullOrWhiteSpace($OutputDirectory)) {
    $outputRoot = $projectRoot
} else {
    $outputRoot = [System.IO.Path]::GetFullPath($OutputDirectory)
    New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null
}

$stageRoot = Join-Path $projectRoot ".deploy-stage-$timestamp"
$zipPath = Join-Path $outputRoot "webskode-deploy-$timestamp.zip"

function Assert-Success([string]$Step) {
    if ($LASTEXITCODE -ne 0) {
        throw "$Step failed with exit code $LASTEXITCODE."
    }
}

# Runs Composer from PATH, or from the Laragon install this project lives in when it is not on PATH.
function Invoke-Composer {
    if (Get-Command composer -ErrorAction SilentlyContinue) {
        & composer @args
        return
    }
    $laragonBin = Join-Path $projectRoot '..\..\bin'
    $phar = Join-Path $laragonBin 'composer\composer.phar'
    $php = Get-Command php -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty Source
    if (-not $php) {
        $php = Get-ChildItem -Path (Join-Path $laragonBin 'php\*\php.exe') -ErrorAction SilentlyContinue |
            Sort-Object { [version]$_.VersionInfo.FileVersion } -Descending |
            Select-Object -First 1 -ExpandProperty FullName
    }
    if (-not $php -or -not (Test-Path -LiteralPath $phar)) {
        throw 'Composer was not found. Add composer to PATH, or run this from a Laragon terminal.'
    }
    & $php $phar @args
}

try {
    Write-Host '[1/5] Building the React production bundle...'
    Push-Location $projectRoot
    & npm.cmd run build
    Assert-Success 'Frontend build'

    Write-Host '[2/5] Preparing an isolated deployment folder...'
    New-Item -ItemType Directory -Path $stageRoot | Out-Null
    Copy-Item -Recurse -Force app, writable, vendor -Destination $stageRoot
    Get-ChildItem -LiteralPath (Join-Path $projectRoot 'public') -Force | Copy-Item -Destination $stageRoot -Recurse -Force
    Copy-Item -Force env, composer.json, composer.lock, spark, preload.php, LICENSE -Destination $stageRoot
    Copy-Item -Force (Join-Path $PSScriptRoot 'deploy-index.php') -Destination (Join-Path $stageRoot 'index.php')
    Copy-Item -Force (Join-Path $PSScriptRoot 'deploy.htaccess') -Destination (Join-Path $stageRoot '.htaccess')

    Write-Host '[3/5] Installing production-only PHP dependencies...'
    Invoke-Composer install --working-dir=$stageRoot --no-dev --prefer-dist --no-interaction --optimize-autoloader
    Assert-Success 'Composer install'

    # Source installs can contain package-level Git metadata; it is not needed in production.
    Get-ChildItem -LiteralPath $stageRoot -Directory -Force -Recurse -Filter '.git' | ForEach-Object {
        $metadataPath = $_.FullName
        if (-not $metadataPath.StartsWith($stageRoot + [System.IO.Path]::DirectorySeparatorChar)) {
            throw "Unsafe metadata path detected: $metadataPath"
        }
        Remove-Item -LiteralPath $metadataPath -Recurse -Force
    }

    Write-Host '[4/5] Creating the deployment ZIP...'
    & tar.exe -a -c -f $zipPath -C $stageRoot .
    Assert-Success 'ZIP creation'

    Write-Host '[5/5] Validating the archive...'
    $entries = @(& tar.exe -tf $zipPath)
    Assert-Success 'ZIP validation'
    if ($entries.Count -lt 10) {
        throw 'ZIP validation failed because the archive contains too few files.'
    }

    $archive = Get-Item -LiteralPath $zipPath
    Write-Host ''
    Write-Host 'Deployment package created successfully:' -ForegroundColor Green
    Write-Host $archive.FullName
    Write-Host ("Size: {0:N2} MB | Files: {1}" -f ($archive.Length / 1MB), $entries.Count)
}
finally {
    Pop-Location -ErrorAction SilentlyContinue
    if (Test-Path -LiteralPath $stageRoot) {
        $resolvedStage = (Resolve-Path -LiteralPath $stageRoot).Path
        if ($resolvedStage.StartsWith($projectRoot + [System.IO.Path]::DirectorySeparatorChar) -and
            (Split-Path $resolvedStage -Leaf).StartsWith('.deploy-stage-')) {
            Remove-Item -LiteralPath $resolvedStage -Recurse -Force
        }
    }
}
