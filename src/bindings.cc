// bindings.cc
#include <napi.h>
#include "ie.h"

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    // Expose the GetIcon function to JavaScript
    exports.Set(Napi::String::New(env, "getIcon"), Napi::Function::New(env, IconExtractor::GetIcon));
    return exports;
}

NODE_API_MODULE(iconextractor, Init)
