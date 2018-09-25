/**
 * Created by feichongzheng on 16/12/7.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const webpackModule = require('./config/webpack/pro/module');
const resolve = require('./config/webpack/dev/resolve');
const getMiniCssExtractPlugin = require('./config/webpack/dev/miniCssExtractPlugin');

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', 'raf/polyfill', 'whatwg-fetch', __dirname + '/site/index.js'],
    output: {
        path: __dirname + '/dist/site',
        filename: 'js/[name]-[hash:8].js',
    },
    module: webpackModule,

    resolve: resolve,

    plugins: [
        new CleanPlugin(['dist/site'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/assets', to: __dirname + '/dist/site/assets'},
            {from: __dirname + '/site/favicon.ico', to: __dirname + '/dist/site/favicon.ico'},
        ]),
        getMiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/site/index.html',
        }),
    ],
};
