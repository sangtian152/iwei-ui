## Radio
::: tip
<div>单选框列表，依赖 cell 组件。</div>
:::

### 引入

```javascript
import { Checklist } from 'iwei-ui';

Vue.component(Checklist.name, Checklist);
```

### 基本用法
```html
<zmbl-radio
  title="单选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</zmbl-radio>
```

### 设置禁用选项
```javascript
this.options = [
  {
    label: '被禁用',
    value: '值F',
    disabled: true
  },
  {
    label: '选项A',
    value: '值A'
  },
  {
    label: '选项B',
    value: '值B'
  }
];
```
```html
<zmbl-radio
	title="单选框列表"
  v-model="value"
  :options="options">
</zmbl-radio>
```

### 选择框右对齐
```html
<zmbl-radio
  align="right"
  title="右对齐"
  v-model="value"
  :options="options">
</zmbl-radio>
```
### 属性
| 参数            | 说明                        | 类型           | 可选值              | 默认值       |
|-----------------|--------------------------|--------------------|---------------|----------|
| options         | 选择项，可直接传字符串数组或者对象数组               | Array       |       |        |
| value          | 绑定值              | Array        |        |               |
| title              | 标题，显示在列表上方           | String    |  |    |
| align              | 复选框对其位置           | String          | left, right          | left             |
