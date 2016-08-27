'use strict'

const npm = require('repotool-utils/npm')
const combine = require('repotool-utils/combine')

const dependencies = npm.dependencies('codecov')
const packageJson = npm.packageJson({ scripts: { codecov: 'codecov' }})

module.exports = (opts, state) => {
  return combine(dependencies, packageJson, {
    hooks: () => ({
      coverageUpload: 'npm run codecov'
    })
  })
}
