## Badge
::: tip
<div>徽章，可指定颜色和尺寸。</div>
:::

### 引入
```javascript
import { Badge } from 'iwei-ui';

Vue.component(Badge.name, Badge);
```

### 指定尺寸
```html
<zmbl-badge size="small">30</zmbl-badge>
<zmbl-badge size="normal">10</zmbl-badge>
<zmbl-badge size="large">10</zmbl-badge>
```

### 指定类型
```html
<zmbl-badge type="primary">30</zmbl-badge>
<zmbl-badge type="error">10</zmbl-badge>
<zmbl-badge type="success">10</zmbl-badge>
<zmbl-badge type="warning">10</zmbl-badge>
```

### 指定颜色
```html
<zmbl-badge size="small" color="#888">自定义颜色</zmbl-badge>
```

### 属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| type	      | 显示类型	      | String	      | primary, error, success, warning |	primary   | 
| color	      | 自定义颜色值	      | String      | 		      | type 的颜色      | 
| size	      | 尺寸	      | String	      | normal, large, small  |	normal      | 

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| — | 	显示内容     |