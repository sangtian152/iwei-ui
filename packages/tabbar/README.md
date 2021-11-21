## Tabbar
::: tip
<div>底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。</div>
:::

### 引入
```javascript
import { Tabbar, TabItem } from 'iwei-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
```

### 基础用法
搭配 `tab-container` 组件使用
```html
<zmbl-tabbar v-model="selected">
  <zmbl-tab-item id="外卖">
    <img slot="icon" src="../assets/100x100.png">
    外卖
  </zmbl-tab-item>
  <zmbl-tab-item id="订单">
    <img slot="icon" src="../assets/100x100.png">
    订单
  </zmbl-tab-item>
  <zmbl-tab-item id="发现">
    <img slot="icon" src="../assets/100x100.png">
    发现
  </zmbl-tab-item>
  <zmbl-tab-item id="我的">
    <img slot="icon" src="../assets/100x100.png">
    我的
  </zmbl-tab-item>
</zmbl-tabbar>
```

### tabbar属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| fixed	       | 固定在页面底部	       | Boolean	       |        | 	false       |        |
| value	       | 返回当前选中的        | tab-item 的 id	       | *		       |        |        |

### tabbar Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| -	            | 内容         |

### tab-item属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| id	       | 选中后的返回值	       | *	       |        |        |

### tab-item Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| -	            | 显示文字         |
| icon	      | icon 图标             |