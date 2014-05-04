<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8" />
	<title>示例项目</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
    <link href="../day4replace/css/reset.css" rel="stylesheet" />
</head>

<body>
    <h1>示例</h1>
    <script src="http://mimg.127.net/p/tools/requirejs/require.js"></script>
    <script src="../day4replace/js/base.js"></script>
    <script type="text/javascript">
    try{
        window.Fix('base');
    }catch(e){}
    </script>
    <!--
    · requirejs入口
    · 这里要确保dependence的名字和模块里面defined的一致，否则会由于找不到名字而不执行
    -->
    <script type="text/javascript">
        define('_moduleStart',['index'],function(oStart) {
            try{
                window.Fix('index');
            }catch(e){}
            try{
                oStart.init();
            }catch(e){}
        });
        require(['_moduleStart']);
    </script>
</body>
</html>