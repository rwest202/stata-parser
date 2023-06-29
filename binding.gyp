{
"targets": [
    {
      "target_name": "stata",
      "type" : "shared_library", 
      "product_extension" : "so",
      "sources": [ "stata.c",
                   "statawrite.c",
                   "stataread.c",
                   "stataread.h",
                   "swap_bytes.h",
                   "stata.h"],
      "include_dirs": [
        '<!(pkg-config --cflags-only-I jansson | cut -c 3-)',
      ],
      "libraries": [
        "<!(pkg-config --libs jansson)",
      ],
      "ldflags" : ['-Wl,-rpath,<!(pwd)'],
      "cflags" : ['-fPIC'],
    },
    {
        "target_name" : "copy_module",
        "type" : "none",
        "copies" : [
                {
                  "files": [ "<(LIB_DIR)/stata.so"   ],
                  "destination": "<!(pwd)"
                }
            ]
    }
    ]
    
}
