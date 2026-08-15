$csharpCode = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

namespace FastOcr {
    public class Scanner {
        public static string GetText(string filePath) {
            return Task.Run(async () => {
                var file = await StorageFile.GetFileFromPathAsync(filePath);
                using (var stream = await file.OpenAsync(FileAccessMode.Read)) {
                    var decoder = await BitmapDecoder.CreateAsync(stream);
                    using (var softwareBitmap = await decoder.GetSoftwareBitmapAsync()) {
                        var engine = OcrEngine.TryCreateFromLanguage(new Windows.Globalization.Language("en-US"));
                        var result = await engine.RecognizeAsync(softwareBitmap);
                        return result.Text;
                    }
                }
            }).GetAwaiter().GetResult();
        }
    }
}
"@

Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies "System.Runtime.WindowsRuntime.dll"

$imagesDir = "C:\Users\Tushar\Desktop\pics for restaurant\Zip file"
$files = Get-ChildItem -Path $imagesDir -Filter "*.jpg" | Sort-Object Name
$results = @()

foreach ($f in $files) {
    try {
        $text = [FastOcr.Scanner]::GetText($f.FullName)
        $obj = [PSCustomObject]@{
            FileName = $f.Name
            Text     = $text
        }
        $results += $obj
        Write-Host "Scanned: $($f.Name)"
    } catch {
        Write-Host "Error on $($f.Name): $_"
    }
}

$results | ConvertTo-Json -Depth 3 | Out-File -FilePath "c:\Rajdhani restaurant\scratch\ocr_results.json" -Encoding utf8
Write-Host "Done! Saved to ocr_results.json"
