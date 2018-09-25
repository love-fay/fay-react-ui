/**
 * Created by feichongzheng on 16/12/7.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const webpackModule = require('../../config/webpack/pro/module');
const resolve = require('../../config/webpack/pro/resolve');

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', 'raf/polyfill', 'whatwg-fetch', __dirname + '/index.js'],
    output: {
        path: __dirname + '/dist/demo',
        filename: 'js/[name]-[hash:8].js',
    },
    module: webpackModule,

    resolve: resolve,

    plugins: [
        new CleanPlugin(['dist/demo'], {
            'root': __dirname,
            'verbose': true,
            'dry': false,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/../../assets', to: __dirname + '/dist/demo/assets'},
            {from: __dirname + '/favicon.ico', to: __dirname + '/dist/demo/favicon.ico'},
        ]),
        getMiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
        }),
    ],
};
