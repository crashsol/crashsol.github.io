# 学习使用Gulp
## 原理
> 1、Gulp是基于Node.js中的数据流
> 2、Gulp主要使用pipe事件输入及输出
> 3、作为插件独立使用
## Gulp的优势
> 1、Gulp是基于代码进行配置
> 2、Gulp的可读性更高
> 3、Gulp基于数据流，所以可以操作pipe()事件

## 开始创建Gulp
- 初始化项目
```   
 npm init   
```
- 安装全局Gulp
```
  npm install gulp -g
```
- 安装gulp到本地项目
```
npm install gulp --save-dev
```
- 创建 gulpfile.js 文件名字必须一致,并获取gulp对象，创建一个默认任务和message测试任务
```
var gulp = require("gulp");
//定义一个 message 任务
gulp.task("message",function(){

  return console.log("gulp is ready");
});

///定义默认任务,名称必须为 default
gulp.task("default",function (){

  return console.log("gulp default function ");

});

//控制台输入
调用message测试任务: gulp message
调用默认任务: gulp 

```
- 拷贝文件 定义一个拷贝文件的任务 将src下面的html文件拷贝到 dist文件下
``` 
gulp.task("copyHtml", function () {
  gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});
```
- 安装图片压缩插件 gulp-imagesmin,并创建图片压缩任务
```
   //安装插件
   npm install gulp-imagemin --save-dev

   //获取对象
   var gulpImage = require("gulp-imagemin"); //图片压缩插件

   //创建任务
    gulp.task("imageMin",function(){
        gulp.src("src/images/*")
            .pipe(gulpImage())
            .pipe(gulp.dest("dist/images"));

    });
```
- 安装JS 压缩插件，并创建压缩任务
```
   //安装插件
   npm install gulp-uglify --save-dev
   //使用插件
   var uglify = require("gulp-uglify");

   //创建任务
   
    //压缩JS
    gulp.task("jsMin",function(){
        gulp.src("src/js/*.js")
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"));
    });
```
- 安装 sass 插件转换css，并创建转换任务  
```
   //安装插件
   npm install gulp-sass --save-dev
   //使用插件
   var sass  = require("gulp-sass");
   
    //sass 转换css
    gulp.task("sass",function(){
            gulp.src("src/sass/*.scss")
                .pipe(sass().on("error",sass.logError))
                .pipe(gulp.dest("dist/css"));
    });
```

- 安装 cssmin 插件转换css，并创建转换任务  
```
   //安装插件
   npm install gulp-cssmin --save-dev
   //使用插件
   var cssminNode  = require("gulp-cssmin");
   
    //压缩 转换后的css
    gulp.task("cssmin",function(){
            gulp.src("src/sass/*.scss")
                 .pipe(sass().on("error", sass.logError)) //装换scss
                 .pipe(concat("style.css"))     //合并所有css到 style.css
                 .pipe(cssmin())                //进行css压缩
                 .pipe(gulp.dest("dist/css"));
    });
```

- 创建批量任务
```
///定义默认任务 执行多项任务
gulp.task("default", ["message","copyHtml", "imageMin", "contatMap","sass"]);

```
- 创建监听任务
```
//监听文件是否变化
gulp.task("watch",function(){

  gulp.watch("src/js/*.js",["contatMap"]);  
  gulp.watch("src/sass/*.sass",["sass"]);
  gulp.watch("src/images/*",["imageMin"]);
  gulp.watch("src/*.html",["copyHtml"]);

});
```