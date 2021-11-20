## NoticeBar
::: tip
<div>用于循环播放展示一组消息通知。</div>
:::

### 引入
```javascript
import { NoticeBar } from 'mint-ui';

Vue.component(NoticeBar.name, NoticeBar);
```

### 基础用法
通过 `text` 属性设置通知栏的内容，通过 `left-icon` 属性设置通知栏左侧的图标。
```html
<zmbl-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
```

### 滚动播放
通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。
```html
<!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
<zmbl-notice-bar scrollable text="技术是开发它的人的共同灵魂。" />

<!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
<zmbl-notice-bar
  :scrollable="false"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
```

### 多行展示
文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。
```html
<zmbl-notice-bar
  wrapable
  :scrollable="false"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
```

### 通知栏模式
通知栏支持 `closeable` 和 `link` 两种模式。
```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<zmbl-notice-bar mode="closeable">技术是开发它的人的共同灵魂。</zmbl-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<zmbl-notice-bar mode="link">技术是开发它的人的共同灵魂。</zmbl-notice-bar>
```

### 自定义样式
通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。
```html
<zmbl-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  技术是开发它的人的共同灵魂。
</zmbl-notice-bar>
```

### 垂直滚动
搭配 `NoticeBar` 和 `Swipe` 组件可以实现垂直滚动的效果。
```html
<zmbl-notice-bar left-icon="volume-o" :scrollable="false">
  <zmbl-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <zmbl-swipe-item>内容 1</zmbl-swipe-item>
    <zmbl-swipe-item>内容 2</zmbl-swipe-item>
    <zmbl-swipe-item>内容 3</zmbl-swipe-item>
  </zmbl-swipe>
</zmbl-notice-bar>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```