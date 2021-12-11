const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require ('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname ,'./src/client/index.js')
    },
    // stats: 'verbose',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js',
        // libraryTarget: 'var',
        // library: 'Client',
        clean: true,
    },
    optimization:{
        minimizer:[new TerserPlugin({}), new OptimizeCssAssetsPlugin({}) ]
    },
    // devtool: 'inline-source-map',
    devServer:{
        // contentBase: 'dist',
        port:8000,
        open:true,
        hot:true,
        // watchContentBase:true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader,'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                use:{loader: "babel-loader"}
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname ,'./src/client/views/index.html')
        }),
         new MiniCssExtractPlugin({filename:'main.css'})
    ]
}
