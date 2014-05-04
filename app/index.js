var util = require('util');
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
module.exports = Gallery;
function Gallery(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
    console.log("模块初始化完成！");
    this.options = options;
}
util.inherits(Gallery, yeoman.generators.Base);

// 生成目录名
Gallery.prototype.askAuthor = function(){
    var cb = this.async();
    var prompts = [{
        name: 'foldername',
        message: '请输入项目名'
    }];
    this.prompt(prompts, function (props) {
        this.foldername = props.foldername;
        cb();
    }.bind(this));
}
// 新建项目名
Gallery.prototype.createProjectFolder = function(){
    fs.exists(this.options.env.cwd + '/' + this.foldername, cb.bind(this));
    function cb(exists){
        if(exists){
            console.log('文件名重复，请重新输入');
            return;
        }else{
            this.mkdir(this.foldername + '');
        }
    }
}
// 新建项目名
Gallery.prototype.copyFiles = function(){
    this.directory('',this.foldername+'');
}