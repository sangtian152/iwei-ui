const isProduction = process.env.NODE_ENV === 'production'; //是否是生产环境
const isPreview = process.env.VUE_APP_TITLE === 'preview'; //是否是预览环境
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  // 将entry指向examples
  pages: {
    index: {
      entry: 'example/entry.js',
      template: 'example/index.html',
      filename: 'index.html'
    }
  },
  // 为packages目录添加babel-loader处理
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('src', resolve('src'))
      .set('zmbl-ui', resolve('./'))
      .set('example', resolve('example'));

    config.module
      .rule('js')
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      });
  },
  configureWebpack: config => {
    if (isProduction && !isPreview) {
      //生产环境删除debugger及console.log
      config.plugins.push(
              new TerserPlugin({
                  terserOptions: {
                      ecma: undefined,
                      warnings: false,
                      parse: {},
                      compress: {
                          drop_console: true,
                          drop_debugger: true, //删除debugger
                          pure_funcs: ['console.log'] // 移除console
                      }
                  }
              })
          );
    }
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /* sass-loader 8.0语法 */
        // prependData: '@import "~@/styles/variables.scss";',

        /* sass-loader 9.0写法，感谢github用户 shaonialife*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          if (
            relativePath.replace(/\\/g, '/') !== 'example/assets/styles/variables.scss'
          ) {
            return '@import "example/assets/styles/variables.scss";' + content;
          }
          return content;
        }
      }
    }
  }
}
;
