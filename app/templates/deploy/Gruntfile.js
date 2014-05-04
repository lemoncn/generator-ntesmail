//打包时间
module.exports = function(grunt) {
    var sTime = grunt.template.today("yymmddHHMM");
    grunt.file.mkdir(sTime);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        version: sTime,
        "regex-replace": {
            replacehtml: {
                src: ["<%=version%>/template/**/*.*", "<%=version%>/ftl/**/*.*", "<%=version%>/<%=version%>/js/**/*.*"],
                actions: [{
                    search: 'day4replace',
                    replace: sTime
                }]
            }
        },
        clean: {
            options: {
                force: true
            },
            build_dest: ['<%=version%>/*'],
            build_tmp: ['../develop/build/*']
        },
        copy: {
            options: {
                force: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '../develop/template',
                    src: ['**'],
                    dest: '../deploy/<%=version%>/template'
                }, {
                    expand: true,
                    cwd: '../develop/ftl',
                    src: ['**'],
                    dest: '../deploy/<%=version%>/ftl'
                }, {
                    expand: true,
                    cwd: '../develop/data',
                    src: ['**'],
                    dest: '../deploy/<%=version%>/data'
                }, {
                    expand: true,
                    cwd: '../develop/build',
                    src: ['**'],
                    dest: '../deploy/<%=version%>/<%=version%>'
                }, {
                    expand: true,
                    cwd: '../develop/day4replace/js',
                    src: ['fix_demo.js'],
                    dest: '../deploy/<%=version%>/<%=version%>/js'
                }]
            }
        },
        requirejs: {
            compile: {
                options: grunt.file.readJSON('../develop/build.js')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs'); //
    grunt.loadNpmTasks('grunt-regex-replace'); //
    grunt.loadNpmTasks('grunt-contrib-copy'); //
    grunt.loadNpmTasks('grunt-contrib-clean'); //

    // grunt.registerTask('build', ['requirejs', 'regex-replace:replacehtml']); //
    grunt.registerTask('default', ['requirejs','clean:build_dest', 'copy:build', 'regex-replace:replacehtml',"clean:build_tmp"]);
};