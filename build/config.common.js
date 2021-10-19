const {resolve} = require('./utils')
const pub = require('./config.pub')
const dependencies = require('../package.json').dependencies;
const pkg = {};
Object.keys(dependencies).forEach(function(key) {
  pkg[key] = key;
});
module.exports = {
    outputDir: resolve('lib'),
    productionSourceMap: false,
    configureWebpack: {
        entry: {
          index: resolve('src'),
        },
        output: {
          filename: 'zmbl-ui.common.js',
          libraryTarget: 'commonjs2',
          libraryExport: 'default',
          library: 'zmbl-ui',
        },
        // 从输出的 bundle 中排除依赖
        externals: Object.assign({
          vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          }
        }, pkg),
        resolve: pub.resolve,
    },
    css: {
        sourceMap: false,
        extract: {
            filename: 'zmbl-ui.common.css'
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
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })
    }
}
