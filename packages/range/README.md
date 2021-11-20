## Range
滑块，支持自定义步长、区间等。

### 引入
```javascript
import { Range } from 'iwei-ui';

Vue.component(Range.name, Range);
```

### 基础用法
将一个本地变量与 `range` 的 `value` 属性同步即可实现双向绑定
```html
<zmbl-range v-model="value"></zmbl-range>
```

### 左右文字
```html
<zmbl-range v-model="value">
  <div slot="start">{{ 0 }}</div>
  <div slot="end">{{ 100 }}</div>
</zmbl-range>
```

### 定义步长
```html
<zmbl-range v-model="value" :step="10"></zmbl-range>
```

### 定义区间
```html
<zmbl-range v-model="value" :min="10" :max="90"></zmbl-range>
```

### 禁用
```html
<zmbl-range v-model="value" disabled></zmbl-range>
```

### 属性
| 参数            | 说明                                       | 类型                         | 默认值       |
|-------------------|-------------------------------|--------------------|---------------|
| value / v-model   | 滑块的值   | Number        |        |
| min          | 最小值        | Number | 0              |
| max    | 最大值         | Number    | 100 |
| step             | 步长   | Number                       | 1          |
| disabled | 是否禁用 | Boolean          | false          |
| barHeight | 滑槽的线宽（像素） | Number          | 1          |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| start                | 滑块左侧 DOM     |
| end | 滑块右侧 DOM     |

