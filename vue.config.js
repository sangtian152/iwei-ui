const devConfig = require('./build/config.dev')
const buildConfig = require('./build/config.build')
console.log(process.env.NODE_ENV)
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
