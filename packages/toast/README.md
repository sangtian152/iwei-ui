## Toast

::: tip
 <div>简短的消息提示框，支持自定义位置、持续时间和样式</div>
:::


### 引入

```javascript
import { Toast } from 'mint-ui';
```
### 基础用法
```javascript
Toast('Upload Complete');
```

### 更多选项

在调用 Toast 时传入一个对象即可配置更多选项

```javascript
Toast({
  message: 'Upload Complete',
  position: 'bottom',
  duration: 5000
});
```

### 带图标的Toast
```javascript
Toast({
  message: '操作成功',
  iconClass: 'icon icon-success'
});
```

### 全局方法
组件库为 Vue.prototype 添加了全局方法 $toast。因此在 vue instance 中可以采用本页面中的方式调用 Toast。
```javascript
this.toast('Upload Complete');
```

### 属性
| 参数           | 说明    | 类型    |  可选值    | 默认值  |
|---------------|---------|---------|----------|--------|
| message       | 文本内容 | String  |          |        |
| position       | Toast 的位置 | String  |   top / bottom / middle   |   'middle'  | 
| duration       | 持续时间（毫秒），若为 -1 则不会自动关闭 | Number  |          | 3000   | 
| className       | Toast 的类名。可以为其添加样式 | String  |          |        |
| iconClass       | icon 图标的类名 | String  |          |        |


### 方法
| 事件名             | 说明        |  参数   |
|-------------------|--------------|--------|
| close             | 执行 Toast 方法会返回一个 Toast 实例，每个实例都有 close 方法，用于手动关闭 Toast  | —— |   
