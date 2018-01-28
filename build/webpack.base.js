'use strict'
const options = require('./options')
let config = {
  resolve: {
    modules: [
      options.paths.root,
      options.paths.resolve('node_modules')
    ],
    alias: {
      vue$: 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    hash: false,
    colors: true,
    chunks: false,
    version: false,
    children: false,
    timings: true
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.module.rules.push(
    {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'}
  )
  config.module.rules[0].options.loaders = {
    scss: 'vue-style-loader!css-loader!sass-loader'
  }
}

module.exports = config