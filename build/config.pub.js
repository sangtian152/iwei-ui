const utils = require('./utils')
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'lib': utils.resolve('lib'),
      'src': utils.resolve('src'),
      'zmbl-ui': utils.resolve('./'),
      'docs': utils.resolve('docs'),
      'example': utils.resolve('example'),
    },
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: 'imd-loader'
        }
      ]
    }]
  }
}
