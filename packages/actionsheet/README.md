## Action sheet
操作表，从屏幕下方移入。

### 引入
```Javascript
import { Actionsheet } from 'iwei-ui';
```

### 基础用法
```html
<zmbl-actionsheet :actions="actions" v-model="sheetVisible"></zmbl-actionsheet>
```
```Javascript
  actions: [
    { name: '拍照' },
    { name: '在相册中选择' },
  ]
```
`actions` 属性绑定一个由对象组成的数组，每个对象有 `name` 和 `method` 两个键，`name` 为菜单项的文本，`method` 为点击该菜单项的回调函数。

将 `v-model` 绑定到一个本地变量，通过操作这个变量即可控制 actionsheet 的显示与隐藏。

### 不带取消按钮的actionsheet
```html
<zmbl-actionsheet :actions="actions" v-model="sheetVisible" :show-cancel="false"></zmbl-actionsheet>
```

## 属性
| 参数             | 说明                                                       | 类型   | 默认值  |
|--------------------|-------------------------------------------------------|---------|----------|
| value / v-model | 是否显示 actionsheet     | Boolean  | false        |
| actions            | 菜单项数组                                             | Array   |          |
| visible            | 取消按钮的文本。若设为空字符串，则不显示取消按钮           | Boolean | false  |
| showCancel         | 是否显示取消按钮             | Boolean  | true   |
| cancelText         | 取消按钮的文本             | String  | '取消'   |
| closeOnClickModal  | 是否可以通过点击 modal 层来关闭 actionsheet | Boolean | 'true'   |

### 事件
| 事件            | 说明                                     | 回调参数    |
|-------------------|---------------------------------------|----------|
| on-open | actionsheet 打开的回调     | ——  |
| on-close | actionsheet 关闭的回调     | ——  |
| on-click | 操作表点击回调     | action  |
