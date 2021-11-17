### Popup
弹出框，可自定义内容。

### 引入

```javascript
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
```

### 基础用法

```html
<mt-popup
  v-model="popupVisible"
  position="bottom">
  ...
</mt-popup>
```

### 属性
| 参数            | 说明                                       | 类型                         | 默认值       |
|-------------------|-------------------------------|--------------------|---------------|
| value / v-model           | 状态是否可见   | Boolean        | 'false'       |
| position          | popup 的位置。省略则居中显示        | 'top' 'right' 'bottom' 'left' |               |
| pop-transition    | 显示/隐藏时的动效，仅在省略 position 时可配置         | 'popup-fade' 'popup-slide'    | 'popup-slide' |
| modal             | 是否创建一个 modal 层   | Boolean                       | true          |
| closeOnClickModal | 是否可以通过点击 modal 层来关闭 popup | Boolean          | true          |

