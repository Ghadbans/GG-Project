const { merge } = require('webpack-merge')
const prod = require('./webpack.prod')
const path = require('path')

module.exports = merge(prod, {
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist_web', 'build', 'js'),
    }
})
