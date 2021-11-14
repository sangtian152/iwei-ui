## Message box
弹出式提示框，有多种交互形式。

### 引入
```javascript
import { MessageBox } from 'iwei-ui';
```

### 基础用法
以标题与内容字符串为参数进行调用
```javascript
MessageBox('提示', '操作成功');
```
或者传入一个对象
```javascript
MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true
});
```
此外，MessageBox 还提供了 alert、confirm 和 prompt 三个方法，它们都返回一个 Promise

### alert提示框
```javascript
MessageBox.alert(message, title);
```
```javascript
MessageBox.alert('操作成功').then(action => {
  ...
});
```

### confirm提示框
```javascript
MessageBox.confirm(message, title);
```
```javascript
MessageBox.confirm('确定执行此操作?').then(action => {
  ...
});
```

### confirm提示框
```javascript
MessageBox.confirm(message, title);
```
```javascript
MessageBox.confirm('请输入姓名').then(action => {
  ...
});
```
在 prompt 中，若用户点击了取消按钮，则 Promise 的状态会变为 rejected

### 属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| title | 提示框的标题     | String  |       | ——        |
| message  | 提示框的内容    | String  |       | ——      |
| closeOnClickModal | 	是否在点击遮罩时关闭提示框     | Boolean  |       | true        |
| showConfirmButton | 是否显示确定按钮   | Boolean  |        | true        |
| showCancelButton | 是否显示取消按钮   | Boolean  |        | true        |
| confirmButtonText | 自定义确定按钮文字   | String  |        | ——        |
| confirmButtonHighlight | 是否将确认按钮的文本加粗显示   | Boolean  |        | false        |
| cancelButtonText | 自定义取消按钮文字   | String  |        | ——        |
| cancelButtonHighlight | 是否将确认按钮的文本加粗显示   | Boolean  |        | false        |
| confirmButtonClass | 确定按钮的自定义类名   | Boolean  |        | false        |
| cancelButtonClass | 取消按钮的自定义类名   | Boolean  |        | false        |
| showInput | 是否显示一个输入框   | Boolean  |        | false        |
| inputType | 输入框的类型   | String  |        | text        |
| inputValue | 输入框的值   | String  |        | ——         |
| inputPlaceholder | 输入框的占位符   | String  |         | ——         |
| confirmButtonDisabled | 是否禁用确定按钮   | Boolean  |        | false        |