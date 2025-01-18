// ie.h
#pragma once

#include <string>
#include <napi.h>

namespace IconExtractor {

    // Modify the function signature to return Napi::Value
    Napi::Value GetIcon(const Napi::CallbackInfo& info);

}
