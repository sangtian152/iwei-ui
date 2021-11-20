## Search
::: tip
<div>搜索框，可显示搜索结果列表。</div>
:::

### 引入
```javascript
import { Search } from 'iwei-ui';

Vue.component(Search.name, Search);
```

### 基础用法
```html
<zmbl-search v-model="value"></zmbl-search>
```

### 设置显示文字
```html
<zmbl-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</zmbl-search>
```

### 带搜索结果
```html
<zmbl-search v-model="value" :result.sync="result"></zmbl-search>
```

### 自定义搜索结果
```html
<zmbl-search v-model="value">
  <zmbl-cell
    v-for="item in result"
    :title="item.title"
    :value="item.value">
  </zmbl-cell>
</zmbl-search>
```

### 属性
| 参数            | 说明                        | 类型           | 可选值              | 默认值       |
|-----------------|--------------------------|--------------------|---------------|----------|
| value	          | 搜索结果绑定值	           | String		          |                  |            |
| cancel-text        | 取消按钮文字	           | String		          | 取消     |            |
| placeholder        | 搜索框占位内容          | 	String		          | 搜索     |            |
| result        | 搜索结果列表	               | Array	     |                  |            |	
| autofocus        | 自动聚焦	               | Boolean	    |         -	         | false  |
| show	        | 始终显示搜索列表              |	Boolean	   |         -	         | false  |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| —                | 	自定义搜索结果列表     |