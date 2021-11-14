## Loadmore
下拉/上拉刷新，支持自定义 HTML 模板。.

### 引入
```Javascript
// ES6 mudule
import { Loadmore } from 'iwei-ui';
Vue.component(Loadmore.name, Loadmore);
```

### 示例
```html
<zmbl-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{'{'}}{item}{{'}'}}</li>
  </ul>
</zmbl-loadmore>
```
#### 下拉刷新
按住列表，下拉一定距离（通过 `topDistance` 配置）后释放，被指定为 `top-method` 的方法就会执行
```Javascript
loadTop() {
  ...// 加载更多数据
  this.$refs.loadmore.onTopLoaded();
}
```
注意在这个方法的最后需要手动调用 `loadmore` 的 `onTopLoaded` 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
#### 上拉加载
与下拉刷新类似
```Javascript
loadBottom() {
  ...// 加载更多数据
  this.allLoaded = true;// 若数据已全部获取完毕
  this.$refs.loadmore.onBottomLoaded();
}
```
唯一的区别是，当底部数据全部获取完毕时，可以将绑定到组件 `bottom-all-loaded` 属性的变量赋值为 true，这样 `bottom-method` 就不会再次执行了。

手指在屏幕上滑动的距离与组件实际移动的距离比值可以通过 `distance-index` 参数配置，默认值为 2。

### 属性
| 参数            | 说明                                     | 类型    | 默认值     |
|-------------------|------------------------------------------------|----------|-------------|
| autoFill          | 若为真，loadmore 会自动检测并撑满其容器          | Boolean  | true        |
| distanceIndex     | 手指移动与组件移动距离的比值                     | Number  | 2        |
| maxDistance       | 组件可移动的最大距离（像素），若为 0 则不限制     | Number  | 0        |
| topPullText       | topStatus 为 pull 时加载提示区域的文字          | String   | '下拉刷新'  |
| topDropText       | topStatus 为 drop 时加载提示区域的文字          | String   | '释放更新'  |
| topLoadingText    | topStatus 为 loading 时加载提示区域的文字           | String   | '加载中...' |
| topDistance       | 触发 `topMethod` 的下拉距离阈值（像素）                     | Number   | 70          |
| topMethod         | 下拉刷新执行的方法                                        | Function |             |
| bottomPullText    | bottomStatus 为 pull 时加载提示区域的文字                | String   | '上拉刷新'  |
| bottomDropText    | bottomStatus 为 drop 时加载提示区域的文字                  | String   | '释放更新'  |
| bottomLoadingText | bottomStatus 为 loading 时加载提示区域的文字                      | String   | '加载中...' |
| bottomDistance    | 触发 `bottomMethod` 的上拉距离阈值（像素）                 | Number   | 70          |
| bottomMethod      | 上拉刷新执行的方法                                      | Function |             |
| bottomAllLoaded   | 若为真，则 `bottomMethod` 不会被再次触发             | Boolean  | false       |

### 事件
| 事件            | 说明                                   | 回调参数     |
|-------------------|------------------------------------------------|-------------|
| top-status-change | 	组件顶部状态发生变化时的回调函数    | 	组件顶部的新状态名 |
| bottom-status-change | 	组件底部状态发生变化时的回调函数    | 	组件底部的新状态名 |

### Slot
| name            | 说明                                   |
|-------------------|------------------------------------------------|
| — | 	数据列表    |
| top | 	自定义顶部加载提示区域 HTML 模板    |
| bottom | 	自定义底部加载提示区域 HTML 模板    |
