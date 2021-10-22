const utils = require('./utils')
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'lib': utils.resolve('lib'),
      'src': utils.resolve('src'),
      'zmbl-ui': utils.resolve('./'),
      'example': utils.resolve('example'),
    },
    modules: ['node_modules']
  },
}
