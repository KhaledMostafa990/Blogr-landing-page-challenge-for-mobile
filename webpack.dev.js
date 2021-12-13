const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require ('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname ,'./src/client/index.js')
    },
    // devtools:false,
    // stats: 'verbose',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js',
        assetModuleFilename:'images/[hash][ext][query]',
        clean: true,
    },
    optimization:{
        minimizer:[new TerserPlugin({}), new OptimizeCssAssetsPlugin({}) ],
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
    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname ,'./src/client/views/index.html')
        }),
         new MiniCssExtractPlugin({filename:'[name].css'})
    ]
}
