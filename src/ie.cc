// ie.cc
#include "ie.h"
#include <windows.h>
#include <vector>
#include <sstream>
#include <stdexcept>

namespace IconExtractor {

    Napi::Value GetIcon(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        // Check the number and type of arguments
        if (info.Length() < 1 || !info[0].IsString()) {
            return Napi::String::New(env, "Error: Expected a string as input.");
        }

        std::string filePath = info[0].As<Napi::String>().Utf8Value();

        try {
            // Extract the icon
            HICON hIcon = ExtractAssociatedIcon(NULL, const_cast<char*>(filePath.c_str()), NULL);
            if (hIcon == NULL) {
                throw std::runtime_error("Icon extraction failed.");
            }

            ICONINFO iconInfo;
            GetIconInfo(hIcon, &iconInfo);

            BITMAP bmp;
            GetObject(iconInfo.hbmColor, sizeof(BITMAP), &bmp);

            std::vector<unsigned char> iconBytes(bmp.bmWidth * bmp.bmHeight * 4);
            std::stringstream ss;

            for (int y = 0; y < bmp.bmHeight; y++) {
                for (int x = 0; x < bmp.bmWidth; x++) {
                    unsigned char* pixel = reinterpret_cast<unsigned char*>(bmp.bmBits) + (y * bmp.bmWidthBytes) + (x * 4);
                    ss << pixel[0] << pixel[1] << pixel[2] << pixel[3];
                }
            }

            DestroyIcon(hIcon);

            // Return the result as a string
            return Napi::String::New(env, ss.str());
        } catch (const std::exception& ex) {
            return Napi::String::New(env, "Error: " + std::string(ex.what()));
        }
    }

}
