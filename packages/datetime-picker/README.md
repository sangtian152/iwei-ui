## Datetime picker
::: tip
<div>日期时间选择器，支持自定义类型。</div>
:::

### 引入

```javascript
import { DatetimePicker } from 'iwei-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
```
### 基础用法
```html
<template>
  <zmbl-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </zmbl-datetime-picker>
</template>
```
```javascript
<script>
  export default {
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    }
  };
</script>
```
### 自定义选项模板
```html
<zmbl-datetime-picker
  v-model="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</zmbl-datetime-picker>
```
### 属性
| 参数            | 说明                        | 类型           | 可选值              | 默认值       |
|-----------------|--------------------------|--------------------|---------------|----------|
| type       | 	组件的类型	       | String	       | datetime,date,time,datetime   |  datetime   |
| cancelText       | 	取消按钮文本	       | String	       |        | 	'取消'       | 
| confirmText	       | 确定按钮文本	       | String	       |        | 	'确定'       | 
| startDate	       | 日期的最小可选值	       | Date	       |        | 	十年前的 1 月 1 日       | 
| endDate	       | 日期的最大可选值	       | Date	       |        | 	十年后的 12 月 31 日       | 
| startHour	       | 小时的最小可选值	       | Number	       |        | 	0       | 
| endHour	       | 小时的最大可选值       | 	Number	       |        | 	23       | 
| yearFormat	       | 年份模板	       | String	         |        | 	'{value}'       | 
| monthFormat	       | 月份模板	       | String		       |        | '{value}'       | 
| dateFormat	       | 日期模板	       | String		       |        | '{value}'       | 
| hourFormat	       | 小时模板	       | String		       |        | '{value}'       | 
| minuteFormat	     | 分钟模板	       | String		       |        | '{value}'       | 

### Events
| 事件名称     |	说明     |	回调参数     |
|-----------------|--------------------------|--------------------|
| confirm	 | 点击确认按钮时的回调函数	| 目前的选择值 |
