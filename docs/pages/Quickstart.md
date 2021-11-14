## 介绍

轻量、可靠的移动端 Vue 组件库。

## 安装

    
`@1.0.0` 表示版本号，建议锁定版本号来保证代码的稳定性

### npm 安装

推荐使用npm安装，它能更好地和[webpack](https://webpack.js.org/)打包工具配合使用。而且可以更好的和
es6配合使用。并且支持按需引入

```shell
npm i iwei-ui -S
# or 
yarn add iwei-ui
```

### 引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ZmTreeOrg from 'iwei-ui';
import "iwei-ui/lib/zmbl-ui.common.css";

Vue.use(ZmTreeOrg);
```

### 按需引入
借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```shell
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：
```javascript
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "iwei-ui",
        "style": true
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：
```javascript
import Vue from 'vue';
import { Button } from 'iwei-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
### 最新版本

[![NPM version](https://img.shields.io/npm/v/zm-tree-org)](https://www.npmjs.com/package/zm-tree-org)

