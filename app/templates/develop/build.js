{
    "appDir": "../develop/day4replace",
    "baseUrl": "js",
    "dir": "../develop/build",
    "paths": {
        "jquery": "http://mimg.127.net/p/tools/jquery/jquery-1.11.0.min",
        "component" : "../../../../../widget/bower_components/ntes_component",
        "pro": "http://mimg.127.net/hd/lib/pro/pro-1.0.2.min"
    },
    "optimize": "none",
    "removeCombined": false,
    "optimizeCss": "standard",
    "findNestedDependencies": false,
    "modules": [
        {
            "name": "base",
            "include": [
                "component/base",
                "component/button"
            ]
        },
        {
            "name": "index",
            "exclude": ["base"]
        }
    ]
}