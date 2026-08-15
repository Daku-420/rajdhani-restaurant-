[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null

$dir = "C:\Users\Tushar\Desktop\pics for restaurant\Zip file"
$files = Get-ChildItem -Path $dir -Filter "*.jpg" | Sort-Object Name
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new("en-US"))

$output = @()

foreach ($f in $files) {
    try {
        $fileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($f.FullName)
        $sfile = $fileTask.GetAwaiter().GetResult()
        
        $streamTask = $sfile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
        $stream = $streamTask.GetAwaiter().GetResult()
        
        $decTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
        $decoder = $decTask.GetAwaiter().GetResult()
        
        $bmpTask = $decoder.GetSoftwareBitmapAsync()
        $bmp = $bmpTask.GetAwaiter().GetResult()
        
        $ocrTask = $engine.RecognizeAsync($bmp)
        $result = $ocrTask.GetAwaiter().GetResult()
        
        $output += [PSCustomObject]@{
            file = $f.Name
            text = $result.Text
        }
        Write-Host "Processed: $($f.Name)"
    } catch {
        Write-Host "Failed $($f.Name): $_"
    }
}

$output | ConvertTo-Json -Depth 3 | Out-File -FilePath "c:\Rajdhani restaurant\scratch\ocr_data.json" -Encoding utf8
Write-Host "COMPLETE_OCR_SUCCESS"
