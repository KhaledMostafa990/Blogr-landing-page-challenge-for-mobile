const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require ('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
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
    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname ,'./src/client/views/index.html')
        }),
         new MiniCssExtractPlugin({filename:'[name].css'})
    ],
    optimization:{
        minimizer:[new TerserPlugin({}), new OptimizeCssAssetsPlugin({}) ],
        // minimizer: [
        // new ImageMinimizerPlugin({
        //         minimizer: {
        //         implementation: ImageMinimizerPlugin.squooshMinify,
        //             options: {
        //                     encodeOptions: {
        //                     mozjpeg: {
        //                         // That setting might be close to lossless, but it’s not guaranteed
        //                         // https://github.com/GoogleChromeLabs/squoosh/issues/85
        //                         quality: 100,
        //                     },
        //                     webp: {
        //                         lossless: 1,
        //                     },
        //                     avif: {
        //                         // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
        //                         cqLevel: 0,
        //                     },
        //                 },
        //             },
        //         },
        //     }),
        // ],
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
