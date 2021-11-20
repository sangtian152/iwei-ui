## Button
::: tip
 <div>按钮，提供几种基础样式和尺寸，可自定义图标。</div>
:::

### 引入
``` javascript
import { Button } from 'iwei-ui';

Vue.component(Button.name, Button);
```

### 基础用法
```html
<zmbl-button type="default">default</zmbl-button>
<zmbl-button type="primary">primary</zmbl-button>
<zmbl-button type="danger">danger</zmbl-button>
```
### 幽灵按钮
```html
<zmbl-button type="default" plain>default</zmbl-button>
<zmbl-button type="primary" plain>primary</zmbl-button>
<zmbl-button type="danger" plain>danger</zmbl-button>
```

### 不同尺寸
```html
<zmbl-button size="small">small</zmbl-button>
<zmbl-button size="normal" type="primary">normal</zmbl-button>
<zmbl-button size="large" type="danger">large</zmbl-button>
```

### 禁用状态
```html
<zmbl-button disabled size="large" type="primary">primary</zmbl-button>
```

### 带图标
```html
<zmbl-button icon="back">back</zmbl-button>
<zmbl-button icon="more">更多</zmbl-button>
```


### 属性
| 参数            | 说明                        | 类型           | 可选值              | 默认值       |
|-------------------|--------------------------|--------------------|---------------|----------|
| plain             | 幽灵按钮               | Boolean       |        | false       |
| disabled          | 禁用状态              | Boolean        |        | false              |
| type              | 按钮显示样式           | String    | default, primary, danger | default   |
| size             | 尺寸              | String           | small, normal, large            | normal          |
| icon              | 图标           | String          | more, back          |              |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| — | 显示的文本内容     |
| icon | 自定义显示的图标     |