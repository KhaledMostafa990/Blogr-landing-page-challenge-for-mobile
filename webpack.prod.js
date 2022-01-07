const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require ('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname ,'./src/client/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js',
        assetModuleFilename:'images/[hash][ext][query]',
        clean: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname ,'./src/client/views/index.html'),
            favicon:'../images/favicon-32x32.png'
        }),
         new MiniCssExtractPlugin({filename:'[name].css'})
    ],
    optimization:{
        minimizer:[new TerserPlugin({}), new OptimizeCssAssetsPlugin({}) ],
    },

    module: {
        rules: [
             {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset',
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader,'css-loader' ]
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                use:{loader: "babel-loader"}
            }
        ]
    },

}
