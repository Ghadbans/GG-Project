const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
    mode: 'production',
    target: 'web',
    devtool: false,
    optimization: {
        splitChunks: false,
        runtimeChunk: false,
        minimize: false,
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /tsconfig\.json$/,
            contextRegExp: /@ljharb/
        }),
    ],
    output: {
        filename: 'app.js',
        chunkFilename: '[name].[contenthash].app.js',
        path: path.resolve(__dirname, 'dist_web', 'build', 'js'),
        publicPath: 'auto',
        globalObject: 'this',
    }
})
