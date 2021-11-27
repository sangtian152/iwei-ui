const path = require('path')
const WebpackBar = require('webpackbar');

const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  publicPath:"./",
  outputDir: "dist",
  assetsDir: "static",
  pages: {
    demo: {
        // page 的入口
        entry: 'example/entry.js',
        // 模板来源
        template: 'example/demo.html',
        // 在 dist/index.html 的输出
        filename: 'demo.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'iwei-ui',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        // chunks: ['chunk-vendors','chunk-common','chunk-libs', 'chunk-ui', 'chunk-example', 'demo']
        chunks: ['runtime', 'chunk-vendors','chunk-common', 'demo']
    },
    docs: {
        // docs 的入口
        entry: 'docs/main.js',
        // 模板来源
        template: 'docs/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'iwei-ui',
        // 提取出来的通用 chunk 和 vendor chunk。
        // chunks: ['chunk-vendors', 'chunk-common', 'chunk-libs', 'chunk-viewUI', 'chunk-docs', 'docs']
        chunks: ['runtime', 'chunk-vendors', 'chunk-common', 'docs']
    },
  },
  css: {
    loaderOptions: {
        css: {
        // 这里的选项会传递给 css-loader
        },
        postcss: {
        // 这里的选项会传递给 postcss-loader
        }
    }
  },
  // 为packages目录添加babel-loader处理
  chainWebpack: config => {
    config.module
    .rule('js')
    .use('babel')
        .loader('babel-loader')
        .tap(options => {
            return options
        }),
    config.module
    .rule('vue')
    .use('iview-loader')
      .loader('iview-loader')
      .tap(options => {
          return {
            prefix: false
          }
      })
      config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          /*config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                vendor: {
                  test: /\/src\//,
                  name: 'iwei-ui',
                  chunks: 'all'
                }
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-viewUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?view-design(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-ui',
                  test: resolve('lib'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })*/
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'lib': resolve('lib'),
        'src': resolve('src'),
        'iwei-ui': resolve('./'),
        'docs': resolve('docs'),
        'example': resolve('example'),
      },
      modules: ['node_modules', resolve('lib')]
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
    },
    plugins:[
      // 添加 进度条
      new WebpackBar(),
    ],
  },
}
