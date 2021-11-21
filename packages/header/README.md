## Header
::: tip
<div>顶部导航栏，支持显示按钮、自定义文字和固定在顶部。</div>
:::

### 引入
```javascript
import { Header } from 'iwei-ui';
Vue.component(Header.name, Header);
```

### 基础用法
```html
<zmbl-header title="header"></zmbl-header>
```

### 固定在页面顶部
```html
<zmbl-header fixed title="固定在顶部"></zmbl-header>
```

### 设置 left 或 right slot
```html
<zmbl-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <zmbl-button icon="back">返回</zmbl-button>
  </router-link>
  <zmbl-button icon="more" slot="right"></zmbl-button>
</zmbl-header>
```

### 设置多个按钮
```html
<zmbl-header title="多个按钮">
  <router-link to="/" slot="left">
    <zmbl-button icon="back">返回</zmbl-button>
    <zmbl-button @click="handleClose">关闭</zmbl-button>
  </router-link>
  <zmbl-button icon="more" slot="right"></zmbl-button>
</zmbl-header>
```

### 属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| fixed	           | 固定在页面顶部	       | Boolean	       | 	       |  false  |
| title	           | 标题	                | String       | 	       |              |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| left   | 	左边显示元素     |
| right   | 	右边显示元素     |
