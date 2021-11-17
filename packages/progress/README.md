## Progress
进度条。

### 引入
```javascript
import { Progress  } from 'iwei-ui';

Vue.component(Progress .name, Progress );
```

### 基础用法
传入 `value` 作为进度条的值。可自定义它的线宽
```html
<mt-progress :value="20" :bar-height="5"></mt-progress>
```

可在进度条两侧显示文字
```html
<mt-progress :value="60">
  <div slot="start">0%</div>
  <div slot="end">100%</div>
</mt-progress>
```

### 属性
| 参数            | 说明                                       | 类型                         | 默认值       |
|-------------------|-------------------------------|--------------------|---------------|
| value / v-model   | 进度条的值（%）   | Number        |        |
| barHeight | 滑槽的线宽（像素） | Number          | 1          |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| start                | 滑块左侧 DOM     |
| end | 滑块右侧 DOM     |

