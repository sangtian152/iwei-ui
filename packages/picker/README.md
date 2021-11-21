## Picker
::: tip
<div>选择器，支持多 slot 联动。</div>
:::

### 引入
```javascript
import { Picker } from 'iwei-ui';

Vue.component(Picker.name, Picker);
```

### 基础用法
传入 `slots`，当被选中的值发生变化时触发 `change` 事件。`change` 事件有两个参数，分别为当前 `picker` 的 `vue` 实例和各 `slot` 被选中的值组成的数组
```html
<zmbl-picker :slots="slots" @change="onValuesChange"></zmbl-picker>
```
```javascript
export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  }
};
```

### 属性
| 参数            | 说明                        | 类型           | 可选值              | 默认值       |
|-----------------|--------------------------|--------------------|---------------|----------|
| slots         | slot 对象数组               | Array       |           | []       |
| valueKey      | 当 values 为对象数组时，作为文本显示在 Picker 中的对应字段的字段名              | Array        |        |               |
| showToolbar    | 是否在组件顶部显示一个 toolbar，内容自定义           | Boolean    |      | false   |
| visibleItemCount   | slot 中可见备选值的个数           | Number          |           | 5             |
| itemHeight      | 每个 slot 的高度           | Number          |           | 36             |

### slot 对象
绑定到 slots 属性的数组由对象组成，每个对象都对应一个 slot，它们有如下键名

| key            | 说明                                     |
|-------------------|---------------------------------------|
| divider      | 对应 slot 是否为分隔符   |
| content      | 分隔符 slot 的显示文本   |
| values       | 对应 slot 的备选值数组。若为对象数组，则需在 zmbl-picker 标签上设置 value-key 属性来指定显示的字段名   |
| defaultIndex      | 对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0   |
| textAlign      | 对应 slot 的对齐方式   |
| flex       | 对应 slot CSS 的 flex 值   |
| className      | 对应 slot 的类名   |

### Events
|事件名       | 说明      |            回调参数  |
|-------------------|--------------------------|--------------------|
| change        | 当被选中的值发生变化时触发                | checked: Boolean   |

### 方法
| 方法名              | 说明      |  参数      |  返回值      |
|-------------------|-------------------------|--------------------|-----------------|
| getSlotValue    | 获取给定 slot 目前被选中的值        | index      | value               |
| setSlotValue    | 设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中        | index, value |  —           |
| getSlotValues    | 获取给定 slot 的备选值数组        | index            | values               |
| setSlotValues    | 设定给定 slot 的备选值数组       | index, values | —              |
| getValues    | 获取所有 slot 目前被选中的值（分隔符 slot 除外）         |         |  values              |
| setValues   | 设定所有 slot 被选中的值（分隔符 slot 除外），该值必须存在于对应 slot 的备选值数组中    | values        |  —              |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| —                | 当 showToolbar 为 true 时，toolbar 中的内容     |