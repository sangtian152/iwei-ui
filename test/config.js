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
  externals[`zmbl-ui/packages/${key}`] = `zmbl-ui/lib/${key}`;
});

// externals['zmbl-ui/src/locale'] = 'zmbl-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`zmbl-ui/src/utils/${file}`] = `zmbl-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`zmbl-ui/src/mixins/${file}`] = `zmbl-ui/lib/mixins/${file}`;
});
/* transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`zmbl-ui/src/transitions/${file}`] = `zmbl-ui/lib/transitions/${file}`;
}); */

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  src: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  // examples: path.resolve(__dirname, '../examples'),
  'zmbl-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
