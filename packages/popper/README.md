## Popper
常用于展示提示信息。

### 基础用法
```html
<zmbl-popper
  placement="top"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <zmbl-button type="primary" slot="reference">click 激活</zmbl-button>
</zmbl-popper>

<zmbl-popper
  placement="top-start"
  title="标题"
  width="200"
  trigger="focus"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <div class="popper-input" slot="reference">
    <input type="text" placeholder="focus 激活">
  </div>
</zmbl-popper>
```

### 属性
| 参数            | 说明                               | 类型          |  可选值             | 默认值       |
|----------------|-------------------------------|--------------------|---------------|------------|
| trigger           | 触发方式                    | String        | click/focus       | click      |
| value / v-model   | 状态是否可见   | Boolean        |            | 'false'       |
| title             | 标题   | String                       | ——          | ——    |
| placement          | 出现位置           | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom             |
| disabled    | Popover 是否可用         | Boolean    | ——    | ——   |
| popper-class       | 为 popper 添加类名   | String          | ——            |  ——          |

### 事件
| 事件            | 说明                                       | 参数                         |
|-------------------|-------------------------------|--------------------|
| show            | 显示时触发         | ——                |
| hide            | 隐藏时触发         | ——                |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| —                 | Popover 内嵌 HTML 文本     |
| reference | 触发 Popover 显示的 HTML 元素     |