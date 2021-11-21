## TabContainer
::: tip
<div>面板，可切换显示子页面。</div>
:::


### 引入
```javascript
import { TabContainer, TabContainerItem } from 'iwei-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
```

### 基础用法
改变 `ative` 的值，与 `tab-container-item` 的 id 一致即显示对应页面。
```html
<zmbl-tab-container v-model="active">
  <zmbl-tab-container-item id="tab-container1">
    <zmbl-cell v-for="n in 10" title="tab-container 1"></zmbl-cell>
  </zmbl-tab-container-item>
  <zmbl-tab-container-item id="tab-container2">
    <zmbl-cell v-for="n in 5" title="tab-container 2"></zmbl-cell>
  </zmbl-tab-container-item>
  <zmbl-tab-container-item id="tab-container3">
    <zmbl-cell v-for="n in 7" title="tab-container 3"></zmbl-cell>
  </zmbl-tab-container-item>
</zmbl-tab-container>
```

### tab-container属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| value	       | 当前激活的 id       | 	*		       |        |
| swipeable	       | 显示滑动效果	       | Boolean	       |        | 	false       |

### tab-container Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| -	            | 内容         |

### tab-container-item属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| id	       | item 的 id       | 	*		       |        | 

### tab-container-item Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| -	            | 内容         |