Add-Type -AssemblyName System.Runtime.WindowsRuntime

$src = @"
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using System.Collections.Generic;

public class OcrBatch {
    public static async Task ProcessAsync() {
        string dir = @"C:\Users\Tushar\Desktop\pics for restaurant\Zip file";
        var files = Directory.GetFiles(dir, "*.jpg");
        Array.Sort(files);
        var engine = OcrEngine.TryCreateFromLanguage(new Windows.Globalization.Language("en-US"));
        
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("[");

        for (int i = 0; i < files.Length; i++) {
            string file = files[i];
            string fname = Path.GetFileName(file);
            string txt = "";
            try {
                var storageFile = await StorageFile.GetFileFromPathAsync(file);
                using (var stream = await storageFile.OpenAsync(FileAccessMode.Read)) {
                    var decoder = await BitmapDecoder.CreateAsync(stream);
                    using (var bitmap = await decoder.GetSoftwareBitmapAsync()) {
                        var result = await engine.RecognizeAsync(bitmap);
                        txt = result.Text;
                    }
                }
            } catch (Exception ex) {
                txt = "ERROR: " + ex.Message;
            }

            string cleanTxt = txt.Replace("\\", "\\\\").Replace("\"", "\\\"").Replace("\r", " ").Replace("\n", " ");
            sb.AppendFormat("  {{\"file\": \"{0}\", \"text\": \"{1}\"}}", fname, cleanTxt);
            if (i < files.Length - 1) sb.AppendLine(",");
            else sb.AppendLine();
        }

        sb.AppendLine("]");
        File.WriteAllText(@"c:\Rajdhani restaurant\scratch\ocr_data.json", sb.ToString(), Encoding.UTF8);
        Console.WriteLine("SUCCESS_OCR_COMPLETED");
    }
}
"@

Add-Type -TypeDefinition $src -ReferencedAssemblies "System.Runtime.WindowsRuntime"
[OcrBatch]::ProcessAsync().GetAwaiter().GetResult()
