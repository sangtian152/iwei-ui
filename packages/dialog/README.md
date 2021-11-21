## Dialog对话框
::: tip
<div>在保留当前页面状态的情况下，告知用户并承载相关操作。</div>
:::

### 引入
```javascript
import { Dialog } from 'iwei-ui';
Vue.component(Dialog.name, Dialog);
```

### 基础用法
```html
<zmbl-dialog
  title="提示"
  v-model="dialogVisible">
  <span>这是一段信息</span>
</zmbl-dialog>
```

### 属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| value / v-model | 是否显示弹出层     | Boolean  |         | false        |
| title | Dialog 的标题     | String  |       | ——        |
| modal  | 是否需要遮罩层    | Boolean  |       | true       |
| closeOnClickModal | 	是否可以通过点击 modal 关闭 Dialog     | Boolean  |       | true        |
| showConfirmButton | 是否显示确定按钮   | Boolean  |        | true        |
| showCancelButton | 是否显示取消按钮   | Boolean  |        | true        |
| confirmButtonText | 自定义确定按钮文字   | String  |        | ——        |
| cancelButtonText | 自定义取消按钮文字   | String  |        | ——        |
| confirmButtonClass | 确定按钮的自定义类名   | Boolean  |        | false        |
| cancelButtonClass | 取消按钮的自定义类名   | Boolean  |        | false        |
| confirmButtonDisabled | 是否禁用确定按钮   | Boolean  |        | false        |

### 事件
| 事件            | 说明                                     | 回调参数    |
|-------------------|---------------------------------------|----------|
| on-open | Dialog 打开的回调     | ——  |
| on-close | Dialog 关闭的回调     | ——  |
| on-click | 按钮点击回调     | action  |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| — | Dialog 的内容     |
| title | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容     |



