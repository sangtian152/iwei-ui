const path = require('path');
const fs = require('fs');
// 告诉 Webpack 不要捆绑这些模块或其任何子模块。
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
// const transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
let externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`iwei-ui/packages/${key}`] = `iwei-ui/lib/${key}`;
});

utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`iwei-ui/src/utils/${file}`] = `iwei-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`iwei-ui/src/mixins/${file}`] = `iwei-ui/lib/mixins/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  src: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  'iwei-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
