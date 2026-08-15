using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using System.Collections.Generic;

class Program {
    static async Task Main(string[] args) {
        string dir = @"C:\Users\Tushar\Desktop\pics for restaurant\Zip file";
        var files = Directory.GetFiles(dir, "*.jpg");
        Array.Sort(files);
        var engine = OcrEngine.TryCreateFromLanguage(new Windows.Globalization.Language("en-US"));
        
        var list = new List<object>();

        foreach (var file in files) {
            try {
                var storageFile = await StorageFile.GetFileFromPathAsync(file);
                using (var stream = await storageFile.OpenAsync(FileAccessMode.Read)) {
                    var decoder = await BitmapDecoder.CreateAsync(stream);
                    using (var bitmap = await decoder.GetSoftwareBitmapAsync()) {
                        var result = await engine.RecognizeAsync(bitmap);
                        list.Add(new {
                            file = Path.GetFileName(file),
                            text = result.Text
                        });
                        Console.WriteLine("OK: " + Path.GetFileName(file));
                    }
                }
            } catch (Exception ex) {
                Console.WriteLine("ERR: " + Path.GetFileName(file) + " - " + ex.Message);
            }
        }

        string json = JsonSerializer.Serialize(list, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(@"c:\Rajdhani restaurant\scratch\ocr_data.json", json);
        Console.WriteLine("FINISHED! Saved to ocr_data.json");
    }
}
