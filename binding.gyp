{
  "targets": [
    {
      "target_name": "icon-extractor",
      "sources": [
        "src/bindings.cc",
        "src/ie.cc"
      ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      },
      "defines": [
        "UNICODE"
      ]
    }
  ]
}
