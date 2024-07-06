module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'https://study.duyiedu.com',
                target: "http://127.0.0.1:7001"
            },
            "/static" : {
                target: "http://127.0.0.1:7001"
              }
        },
    },
    configureWebpack: require('./webpack.config')
}