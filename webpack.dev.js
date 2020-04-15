const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
	entry: './src/client/index.js',
	devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
    new HtmlWebPackPlugin(
    {
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })
    ],
    // To change the Web-dev default server(8080)
    devServer: {
    hot: true,
    port: 9000
}

}