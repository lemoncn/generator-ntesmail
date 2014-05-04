define(function(require) {
    var $ = require('jquery');
    var Button = require('component/button');
    return {init: function(){
        var oBtn = new Button({
            subclass: 'main',
            text: '确定',
            click: function(){
                alert(0);
            }
        }).render($(document.body)[0]);
        oBtn.listen('click',function(){
            alert('呵呵，就是我了！');
        });
    }};

});