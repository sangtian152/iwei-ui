## Switch
::: tip
<div>用于在打开和关闭状态之间进行切换</div>
:::



### 引入
``` javascript
import { Switch } from 'iwei-ui';

Vue.component(Switch.name, Switch);
```

### 基础用法
通过 v-model 绑定开关的选中状态，true 表示开，false 表示关。。
``` html
<zmbl-switch v-model="value"></zmbl-switch>
```

### 带显示内容
``` html
<zmbl-switch v-model="value">开关</zmbl-switch>
```

### 属性
| 参数            | 说明                        | 类型            | 默认值       |
|-------------------|--------------------------|-----------------|------------|
| value	        | 绑定值	                        | Boolean	       |-                |


### Events
|事件名	     | 说明	     |回调参数  |
|-------------------|--------------------------|--------------------|
| change	      | 开关状态切换时触发	               | checked: Boolean   |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| —                | 显示内容     |
