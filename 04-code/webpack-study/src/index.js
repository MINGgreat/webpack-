import $ from "jquery"

//在webpack中，可以将css.图片，字体等文件，当做模块来处理！
//下面这句代码，最终执行并不是通过js引擎解析执行，
//而是，单纯的告诉webpack，我们用到了这个文件，你帮我进行打包！！
// import "./index.css"


// import "./index.less"
// import "./index.sass"

import "../node_modules/bootstrap/dist/css/bootstrap.css"

$(function(){
    $('#box').click(function(){
        alert("会当凌绝顶，一览众山小！")
    })
})