using System;
using System.Drawing;
using System.IO;

namespace MeowSkyKung
{
    public class IconExtractor
    {
        // Export the method so it can be used by native code
        public static string GetIcon(string filePath)
        {
            try
            {
                // Extract the associated icon from the file path
                Icon ico = Icon.ExtractAssociatedIcon(filePath);

                if (ico == null)
                {
                    throw new Exception("Icon extraction failed.");
                }

                // Convert icon to bitmap and then to byte array
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    ico.ToBitmap().Save(memoryStream, System.Drawing.Imaging.ImageFormat.Png);
                    byte[] iconBytes = memoryStream.ToArray();

                    // Convert byte array to Base64 string
                    return Convert.ToBase64String(iconBytes);
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Error: {ex.Message}");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                throw new Exception("Usage: IconExtractor <filePath>");
            }

            string filePath = args[0];
            string base64Icon = IconExtractor.GetIcon(filePath);

            Console.WriteLine("");
            Console.WriteLine(base64Icon);
        }
    }
}
