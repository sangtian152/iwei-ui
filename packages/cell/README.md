## Cell
::: tip
<div>单元格，可用作展示列表信息、链接或者表单等。</div>
:::

### 引入

```javascript
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
```

### 基础用法
```html
<zmbl-cell title="标题文字"></zmbl-cell>
<zmbl-cell title="标题文字" value="说明文字"></zmbl-cell>
```

### 可点击的链接
```html
<zmbl-cell
  title="标题文字"
  to="//github.com"
  is-link
  value="带链接">
</zmbl-cell>
```
### 带图标
```html
<zmbl-cell title="标题文字" icon="more" value="带 icon"></zmbl-cell>
```
### 带自定义图标
```html
<zmbl-cell title="标题文字">
  <span>icon 是图片</span>
  <img slot="icon" src="../assets/100x100.png" width="24" height="24">
</zmbl-cell>
```
### 自定义内容
```html
<zmbl-cell title="标题文字" is-link>
  <span style="color: green">这里是元素</span>
</zmbl-cell>
```
### 带备注信息
```html
<zmbl-cell title="标题" label="描述信息" is-link></zmbl-cell>
```

### 属性
| 参数            | 说明                        | 类型           | 可选值              | 默认值       |
|-------------------|--------------------------|--------------------|---------------|----------|
| icon             | 图标               | String       | more, back       |        |
| title          | 标题              | String        |        |               |
| to              | 跳转链接           | String    |  |    |
| value             | 内容              | *           |             |           |
| label              | 备注信息，显示在标题下方           | String          |           |              |
| is-link              | 链接，会显示箭头图标。搭配 to 属性使用           | String          |           |              |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| — | 显示的文本内容     |
| title | 自定义标题     |
| icon | 自定义显示的图标     |