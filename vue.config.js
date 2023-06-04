const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const WebpackAssetsManifest = require("webpack-assets-manifest");
module.exports = defineConfig({
    transpileDependencies: true,
    filenameHashing: true,
    /***
     * we will configure this proxy server as backend with our laravel application
     * The https serve we need when we have to user secure connection as a frontend
     * In all project we don't need https
     *
     */
    devServer: {
        // historyApiFallback: true,
        // https: {
        //     key: fs.readFileSync("../key.pem"),
        //     cert: fs.readFileSync("../cert.pem"),
        // },
        // proxy: {
        //     "/api": {
        //         target: "http://192.168.1.7:8080", // Laravel API URL
        //         changeOrigin: true,
        //         pathRewrite: { "^/api": "/" },
        //     },
        // },
    },

    configureWebpack: {
        plugins: [
            new WebpackAssetsManifest({
                output: "manifest.json",
                publicPath: true,
                writeToDisk: true,
            }),
        ],
    },
});
