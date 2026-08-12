const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'production',
    devtool:'source-map',
    optimization: {
        splitChunks: false,
        runtimeChunk: false,
    },
    plugins: [
        // Suppress the missing @ljharb/tsconfig.json in gopd node_modules (only needed for TS type-checking, not runtime)
        new webpack.IgnorePlugin({
            resourceRegExp: /tsconfig\.json$/,
            contextRegExp: /@ljharb/
        }),
    ],
})