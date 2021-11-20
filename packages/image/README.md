## Image
::: tip
<div>增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。</div>
:::



### 引入
``` javascript
import { Image } from 'iwei-ui';

Vue.component(Image.name, Image);
```

### 基础用法
基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。
``` html
<zmbl-image
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 填充模式
通过 fit 属性可以设置图片填充模式，可选值见下方表格。
``` html
<zmbl-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 圆形图片
通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。
``` html
<zmbl-image
  round
  width="10rem"
  height="10rem"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 图片懒加载
设置 lazy-load 属性来开启图片懒加载，需要搭配 Lazyload 组件使用。
``` html
<zmbl-image
  width="100"
  height="100"
  lazy-load
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 加载中提示
Image 组件提供了默认的加载中提示，支持通过 loading 插槽自定义内容。
``` html
<zmbl-image src="https://img01.yzcdn.cn/vant/cat.jpeg">
  <template v-slot:loading>
    <zmbl-loading type="spinner" size="20" />
  </template>
</zmbl-image>
```

### 加载失败提示
Image 组件提供了默认的加载失败提示，支持通过 error 插槽自定义内容。
``` html
<zmbl-image src="https://img01.yzcdn.cn/vant/cat.jpeg">
  <template v-slot:error>加载失败</template>
</zmbl-image>
```

### 属性
| 参数            | 说明                        | 类型            | 默认值       |
|-------------------|--------------------------|-----------------|------------|
| src	        | 图片链接	      | String	      |- |
| fit        |	图片填充模式	      | String	      |fill |
| alt	        | 替代文本	      | String	      |- |
| width	        | 宽度，默认单位为px	      | Number or String	      | - |
| height	        | 高度，默认单位为px	      | Number or String	      | - |
| radius	        | 圆角大小，默认单位为px	      | Number or String	      | 0 |
| round	        | 是否显示为圆形	      | Boolean	|  false |
| lazy-load	        | 是否开启图片懒加载，须配合 Lazyload 组件使用	      | Boolean	      | false |
| show-error	        | 是否展示图片加载失败提示	      | Boolean	      | true |
| show-loading	        | 是否展示图片加载中提示	      | Boolean	      | true |
| error-icon	        | 失败时提示的图标名称或图片链接	      | String	      | photo-fail |
| loading-icon	        | 加载时提示的图标名称或图片链接	      | String	      | photo |
| icon-prefix	        | 图标类名前缀，同 Icon 组件的 class-prefix 属性	      | String	      | van-icon |

### Events
|事件名	     | 说明	     |回调参数  |
|-------------------|--------------------------|--------------------|
| click	      | 点击图片时触发	               | event: Event   |
| load	      | 图片加载完毕时触发            |	-             |
| error	      | 图片加载失败时触发            |	-             |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| — | 自定义图片下方的内容     |
| loading | 自定义加载中的提示内容     |
| error | 自定义加载失败时的提示内容     |