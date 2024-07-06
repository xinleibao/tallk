const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
    // BABEL_ENV 使用NODE_ENV会出现bug 需要借助插件cross-env搭配使用
    module.exports = {
        devtool:'none', //取消源码地图
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            // 将当前的库禁止打包到build
            vue: "Vue",
            vuex: "Vuex",
            'vue-router': "VueRouter",
            axios: "axios"
        }
    };
} else {
    module.exports = {};
}
