/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpackModule = require('./config/webpack/dev/module');
const resolve = require('./config/webpack/dev/resolve');
const getProxy = require('./config/webpack/dev/proxy');
const getMiniCssExtractPlugin = require('./config/webpack/dev/miniCssExtractPlugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', 'raf/polyfill', 'whatwg-fetch', __dirname + '/site/index.js'],
    output: {
        path: __dirname + '/public',
        filename: 'js/[name].[hash:8].bundle.js',
    },

    module: webpackModule,

    resolve: resolve,

    plugins: [
        new CleanPlugin(['public'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/assets', to: __dirname + '/public/assets'},
            {from: __dirname + '/site/favicon.ico', to: __dirname + '/public/favicon.ico'},
        ]),
        getMiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/site/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        host: "0.0.0.0",
        port: '8000',
        historyApiFallback: true,
        inline: true,
        hot: true,
        hotOnly: true,
        proxy: {
            "/demo": "http://localhost:3001",
            "/js": "http://localhost:3001",
            "/css": "http://localhost:3001",
            ...getProxy(__dirname)
        },
        stats: {children: false}
    },
};
