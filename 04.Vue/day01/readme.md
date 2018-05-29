* webpack 属性配置
```javascript
   const pash = require('path')
   module.exports ={
       entry:{
           /* main是默认入口，也可以是多入口 */
           main:'/src/main.js'
       },
       /* 出口 */
       output:{
           filename:'./build.js',/* 指定JS文件 */
           path:path.join(__dirname,'..','dist')/* 代表当前目录的上一级 */

       },
       module:{
           /* 一样的功能：rules： webpack2.0引入 */
           loaders:[]
       }

   }
```
#### 今日重点
* 运行起来Vue
* vue常用指令
* 主键的使用
### es6
---
#### webpack-ES6的处理
* ES6的模块，vue本身支持es6的模块导入导出
* bable
    + bale-loader(内部依赖bable-core)
    + 关键字（presets es2015）
    + 函数（plugins...）
