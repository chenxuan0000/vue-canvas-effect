'use strict'
const merge = require('deep-assign')
const webpack = require('webpack')
const options = require('./options')
const base = require('./webpack.base.js')

const config = merge(base, {
  entry: options.paths.src.main,
  output: {
    filename: options.isProduction ? '[name].min.js' : '[name].js',
    path: options.paths.output.main,
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: []
})

// debug and production
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(options.version)
  })
])

if (options.isProduction) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })
  ])
}
module.exports = config
