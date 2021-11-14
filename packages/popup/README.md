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
| visible           | visibility of the popup   | Boolean        | 'false'       |
| position          | location of the popup         | 'top' 'right' 'bottom' 'left' |               |
| pop-transition    | CSS transition of the popup         | 'popup-fade' 'popup-slide'    | 'popup-slide' |
| modal             | determines if a modal pops with the popup   | Boolean                       | true          |
| closeOnClickModal | determines if the popup turns off when the modal is clicked | Boolean          | true          |

