<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <zmbl-cell title="标题文字"></zmbl-cell>
    <zmbl-cell title="标题文字" value="说明文字"></zmbl-cell>
    <zmbl-cell title="标题文字" icon="more" value="带 icon"></zmbl-cell>
    <zmbl-cell title="标题文字" icon="more">
      <span>icon 是图片</span>
      <img slot="icon" src="../assets/100x100.png" width="24" height="24">
    </zmbl-cell>
    <zmbl-cell title="标题文字" is-link value="带链接"></zmbl-cell>
    <zmbl-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </zmbl-cell>
    <zmbl-cell title="标题文字">
      <zmbl-button size="small" type="primary" icon="back">按钮</zmbl-button>
    </zmbl-cell>

    <zmbl-cell title="标题" label="描述信息" is-link></zmbl-cell>

    <zmbl-cell title="原生跳转" label="跳转到 https://zmbl-ui.github.io" is-link to="https://zmbl-ui.github.io"></zmbl-cell>
    <zmbl-cell title="路由跳转" label="跳转到 /#/toast" is-link :to="{ name: 'Toast' }"></zmbl-cell>
  </div>
</template>
