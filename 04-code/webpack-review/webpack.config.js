var path = require("path")

//webpack是用nodejs写的工具
//所以要给webpack提供配置文件，需要使用node模块的方式
module.exports = {
    //entry: 入口文件的路径
    entry: path.join(__dirname, "src/index.js"),
    //output: 出口文件的路径配置
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    }
}