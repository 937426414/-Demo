module.exports= {
    baseUrl : '/',//根目录
    outputDir :'dist',//输出目录
    assetsDir: 'assets',//静态资源目录
    lintOnSave:false,//是否开启eslint保存检测
    devServer:{
        open:true,
        host: 'localhost',
        port: 8081,
        https:false,
        hotOnly:false,
        
    }

};