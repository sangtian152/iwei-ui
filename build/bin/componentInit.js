'use strict';

var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'));
var components = {};

dirs.forEach((dir) => {
  components[dir] = `./packages/${dir}/index.js`;
});


fs.writeFile(path.resolve(__dirname, '../../components.json'), JSON.stringify(components), () => {});
