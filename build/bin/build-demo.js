var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var IMPORT_TEMPLATE = 'import {{name}} from \'./src/{{package}}\';';
var EXPORT_TEMPLATE = 'export default {{name}};';
var ISNTALL_COMPONENT_TEMPLATE = '{{name}}.install = (Vue) => Vue.component({{name}}.name, {{name}});';
var MAIN_TEMPLATE = `{{include}}
{{install}}
{{exports}}
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var exportTemplate = [];
var installTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);
  if ([
    // directives
    'Range',
    'InfiniteScroll',
    'lazyload',
    // services
    'SwipeItem',
  ].indexOf(componentName) === -1) {
    includeComponentTemplate = [].concat(render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    }));
    exportTemplate = [].concat(render(EXPORT_TEMPLATE, {
      name: componentName,
      package: name
    }));
    installTemplate = [].concat(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
    var template = render(MAIN_TEMPLATE, {
      include: includeComponentTemplate.join('\n'),
      exports: exportTemplate.join('\n'),
      install: installTemplate.join('\n'),
    });
    const OUTPUT_PATH = path.join(__dirname, `../../packages/${name}/index.js`);
    fs.writeFileSync(OUTPUT_PATH, template);
  }
  
});

/* var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  exports: exportTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION || require('../../package.json').version
});

fs.writeFileSync(OUTPUT_PATH, template); */
