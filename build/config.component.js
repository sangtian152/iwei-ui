// 告诉 Webpack 不要捆绑这些模块或其任何子模块。
const nodeExternals = require('webpack-node-externals');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve, getComponentEntries} = require('./utils')
const pub = require('./config.pub')
const Components = require('../components.json');
const dependencies = require('../package.json').dependencies;
const externals = {};
Object.keys(Components).forEach(function(key) {
  externals[`zmbl-ui/packages/${key}/index.js`] = `zmbl-ui/lib/${key}`;
  externals[`zmbl-ui/packages/${key}/style.css`] = `zmbl-ui/lib/${key}/style.css`;
});
Object.keys(dependencies).forEach(function(key) {
  externals[key] = key;
});
module.exports = {
    outputDir: resolve('lib'),
    productionSourceMap: false,
    configureWebpack: {
        entry: {
          ...getComponentEntries('packages'),
        },
        output: {
          filename: '[name]/index.js',
          libraryTarget: 'commonjs2',
          libraryExport: 'default',
          library: 'zmbl-ui',
        },
        // 从输出的 bundle 中排除依赖
        externals: [Object.assign({
          vue: {
              root: 'Vue',
              commonjs: 'vue',
              commonjs2: 'vue',
              amd: 'vue'
            }
          }, externals), nodeExternals()],
        resolve: pub.resolve,
        performance: {
          hints: false
        },
    },
    css: {
        sourceMap: false,
        extract: {
            filename: '[name]/style.css'
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('html')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
        config.module
          .rule('js')
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              return options
          })
        config.module
          .rule("vue")
          .use("vue-loader")
          .loader("vue-loader")
          .tap(options => {
            return options
          })
        config.module
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })
    }
}
