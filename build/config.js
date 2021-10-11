var Components = require('../components.json');
var path = require('path');
var dependencies = require('../package.json').dependencies;
var externals = {};
var pkg = {};
Object.keys(Components).forEach(function(key) {
  externals[`zmbl-ui/packages/${key}/index.js`] = `zmbl-ui/lib/${key}`;
  externals[`zmbl-ui/packages/${key}/style.css`] = `zmbl-ui/lib/${key}/style.css`;
});
Object.keys(dependencies).forEach(function(key) {
  externals[key] = key;
  pkg[key] = key;
});
exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals);
exports.pkg = Object.assign({
  vue: 'vue'
}, pkg);

exports.alias = {
  'zmbl-ui': path.join(__dirname, '..'),
  'src': path.join(__dirname, '../src')
};

exports.jsexclude = /node_modules|lib/;

exports.extends = ['vue2', 'saladcss', 'buble'];

