requirejs.config({
    baseUrl: '/day4replace/js/', // 这个路径是相对于页面来说的
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'http://mimg.127.net/p/tools/jquery/jquery-1.11.0.min',
        pro: "http://mimg.127.net/hd/lib/pro/pro-1.0.2.min",
        // 加载组件，如果是相对目录，那么是相对于baseUrl而言的，如果是http那么就是绝对路径了
        component: '/widget/bower_components/ntes_component/'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});