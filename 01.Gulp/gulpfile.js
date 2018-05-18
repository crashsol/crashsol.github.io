/* 处理任务 */

var gulp = require("gulp"); //gulp对象

var gulpImage = require("gulp-imagemin"); //图片压缩插件

var uglify = require("gulp-uglify"); //JS压缩

var sass = require("gulp-sass"); //sass转换成css

var cssmin = require("gulp-cssmin"); //css 压缩

var concat = require("gulp-concat"); //代码合并


/* 
 常用方法
  gulp.task()  --  定义任务
  gulp.src() --找到需要执行任务的文件
  gulp.dest() -- 执行任务后，文件输出的位置
  gulp.watch() -- 监听文件是否有变化，如果有变化，立即执行任务
*/

//定义一个 message 任务
gulp.task("message", function () {

  return console.log("gulp is ready");
});



//定义一个拷贝文件的任务 将src下面的html文件拷贝到 dist文件下
gulp.task("copyHtml", function () {
  gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});

//图片压缩
gulp.task("imageMin", function () {

  gulp.src("src/images/*")
    .pipe(gulpImage())
    .pipe(gulp.dest("dist/images"));

});

//压缩JS
gulp.task("jsMin", function () {

  gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});


//sass 转换css，合并，并压缩
gulp.task("sass", function () {
  gulp.src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError)) 
    .pipe(concat("style.css"))
    .pipe(cssmin())
    .pipe(gulp.dest("dist/css"));
});

//代码合并
gulp.task("contatMap",function(){

     gulp.src("scr/js/*.js")
         .pipe(concat("main.js")) //合并后的名字
         .pipe(uglify())  //进行压缩
         .pipe(gulp.dest("dist/js"));

});



///定义默认任务 执行多项任务
gulp.task("default", ["message","copyHtml", "imageMin", "contatMap","sass"]);


//监听文件是否变化

gulp.task("watch",function(){

  gulp.watch("src/js/*.js",["contatMap"]);  
  gulp.watch("src/sass/*.sass",["sass"]);
  gulp.watch("src/images/*",["imageMin"]);
  gulp.watch("src/*.html",["copyHtml"]);

});