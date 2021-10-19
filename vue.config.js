const devConfig = require('./build/config.dev')
const buildCommon = require('./build/config.common')
const buildComponent = require('./build/config.component')
const config = {
  "development": devConfig,
  "common": buildCommon,
  "component": buildComponent,
}
module.exports = config[process.env.VUE_APP_ACTION || process.env.NODE_ENV]
