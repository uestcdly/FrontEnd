const path = require('path');
//使用module.exports,如果使用module.export会报错
module.exports={
// module.export={
        // 指定打包的入口文件
        entry:path.join(__dirname,"./modules/main.js"),//打包文件
        output:{
            path:path.join(__dirname,'./dist'),//打包好的文件存放地址
            filename:"boundle.js"
        },
        mode:'development'//设置mode

};