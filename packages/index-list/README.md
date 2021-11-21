## IndexList
::: tip
<div>索引列表，可由右侧索引导航快速定位到相应的内容。</div>
:::


### 引入
```javascript
import { IndexList, IndexSection } from 'iwei-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
```
### 基础用法
```html
<zmbl-index-list>
  <zmbl-index-section index="A">
    <zmbl-cell title="Aaron"></zmbl-cell>
    <zmbl-cell title="Alden"></zmbl-cell>
    <zmbl-cell title="Austin"></zmbl-cell>
  </zmbl-index-section>
  <zmbl-index-section index="B">
    <zmbl-cell title="Baldwin"></zmbl-cell>
    <zmbl-cell title="Braden"></zmbl-cell>
  </zmbl-index-section>
  ...
  <zmbl-index-section index="Z">
    <zmbl-cell title="Zack"></zmbl-cell>
    <zmbl-cell title="Zane"></zmbl-cell>
  </zmbl-index-section>
</zmbl-index-list>
```
`zmbl-index-section` 与右侧导航中的索引一一对应，`zmbl-index-section` 的 `index` 属性即为与其对应的索引的显示文本。`zmbl-index-section` 标签内可为任意自定义内容。

```html
<zmbl-index-list :show-indicator="false">
  ...
</zmbl-index-list>
```


### index-list属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| height	     | 组件的高度。若不指定，则自动延伸至视口底	      | Number		|            |           |
| showIndicator	     | 是否显示索引值提示符	     | Boolean		         |        | true         |

### index-list Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| -	              | 一个或多个 zmbl-index-section 组件         |

### index-section属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| index	             |   索引值（必需参数）	                   | String		|           |              |


### index-section Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| -	            | 单个 zmbl-index-section 的内容         |