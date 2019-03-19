const path = require('path')

function resolve(pathname){
    return path.resolve(__dirname,pathname)
}


module.exports = {
    configureWebpack: (config)=>{
        config.resolve.alias = {
            ...config.resolve.alias,
            assets:resolve('./src/assets'),
            home:resolve('./src/views/home'),
            util:resolve('./src/util')
        }
    },
    devServer: {
      proxy: {
        '/ajax': {
          target: 'http://10.60.18.142:8080',
          changeOrigin: true
        }
      }
    }
}
