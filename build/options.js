'use strict'
const path = require('path')
const glob = require('glob')
const version = require('../package.json').version

function getEntry (globPath) {
  let files = glob.sync(globPath)
  let out = {}

  files.map((file) => {
    let key = file.replace('packages/', '').replace('.js', '')
    out[key] = path.resolve(file)
  })
  return out
}

let entries = getEntry('packages/**/index.js')

module.exports = {
  version,
  isProduction: process.env.NODE_ENV === 'production',
  paths: {
    root: path.join(__dirname, '..'),
    src: {
      main: entries,
      examples: path.join(__dirname, '..', 'examples-src')
    },
    output: {
      main: path.join(__dirname, '..', 'lib'),
      examples: path.join(__dirname, '..', 'examples')
    },
    resolve (loc) {
      return path.join(__dirname, '..', loc)
    }
  }
}
