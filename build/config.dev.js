const pub = require('./config.pub')

module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'example/entry.js',
            // 模板来源
            template: 'example/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'pl-app document',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        docs: {
            // docs 的入口
            entry: 'docs/entry.js',
            // 模板来源
            template: 'docs/docs.html',
            // 在 dist/index.html 的输出
            filename: 'docs.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
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
    configureWebpack: {
        resolve: pub.resolve,
        module: pub.module
    }
}
