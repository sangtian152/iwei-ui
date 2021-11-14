## Indicator
加载提示框，支持自定义文本和加载图标。

## 引入
```javascript
// ES6 mudule
import { Indicator } from 'iwei-ui';
```

### 基础用法
```javascript
Indicator.open();
```

### 带文字的提示框:
```javascript
Indicator.open('Loading...');
```

### 可配置的加载提示框:
```javascript
Indicator.open({ text:'Loading...', spinnerType: 'fading-circle' });
```

### 关闭提示框:
```javascript
Indicator.close();
```

### Options
| 参数      | 说明    | 类型                                                       | 默认值 |
|-------------|----------------|-------------------------------------------------------------|---------|
| text        | indicator text | String                                                      |         |
| spinnerType | spinner type   | 'snake', 'fading-circle', 'double-bounce', 'triple-bounce'  | 'snake' |

### License
MIT
