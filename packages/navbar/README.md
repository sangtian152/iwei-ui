## Navbar
::: tip
<div>顶部选项卡，与 Tabbar 类似，依赖 tab-item 组件。</div>
:::


### 引入
```javascript
import { Navbar, TabItem } from 'iwei-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
```

### 基础用法
搭配 tab-container 组件使用
```html
<zmbl-navbar v-model="selected">
  <zmbl-tab-item id="1">选项一</zmbl-tab-item>
  <zmbl-tab-item id="2">选项二</zmbl-tab-item>
  <zmbl-tab-item id="3">选项三</zmbl-tab-item>
</zmbl-navbar>

<!-- tab-container -->
<zmbl-tab-container v-model="selected">
  <zmbl-tab-container-item id="1">
    <zmbl-cell v-for="n in 10" :title="'内容 ' + n" />
  </zmbl-tab-container-item>
  <zmbl-tab-container-item id="2">
    <zmbl-cell v-for="n in 4" :title="'测试 ' + n" />
  </zmbl-tab-container-item>
  <zmbl-tab-container-item id="3">
    <zmbl-cell v-for="n in 6" :title="'选项 ' + n" />
  </zmbl-tab-container-item>
</zmbl-tab-container>
```

### navbar属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| fixed	        | 固定在页面顶部	        | Boolean	        |         | 	false        | 
| value	        | 返回当前选中的 tab-item 的 id	        | *		        |         |         |

### navbar Slot
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