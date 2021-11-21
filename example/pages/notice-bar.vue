<template>
	<div class="page-notice-bar">
		<div class="page-title">NoticeBar</div>
		<div class="demo-block">
			<h3>基础用法</h3>
			<zmbl-notice-bar scrollable text="通知栏的内容长度溢出时会自动开启滚动播放" left-icon="notification" />
		</div>
		<div class="demo-block">
			<h3>滚动播放</h3>
			<zmbl-notice-bar scrollable text="通知栏的内容长度溢出时会自动开启滚动播放" />

			<zmbl-notice-bar
				:scrollable="false"
				text="通知栏的内容长度溢出时会自动开启滚动播放"
			/>
		</div>
		<div class="demo-block">
			<h3>多行展示</h3>
			<zmbl-notice-bar
				wrapable
				:scrollable="false"
				text="通知栏的内容长度溢出时会自动开启滚动播放"
			/>
		</div>
		<div class="demo-block">
			<h3>通知栏模式</h3>
			<!-- closeable 模式，在右侧显示关闭按钮 -->
			<zmbl-notice-bar mode="closeable">技术是开发它的人的共同灵魂。</zmbl-notice-bar>

			<!-- link 模式，在右侧显示链接箭头 -->
			<zmbl-notice-bar mode="link">技术是开发它的人的共同灵魂。</zmbl-notice-bar>
		</div>
		<div class="demo-block">
			<h3>自定义样式</h3>
			<zmbl-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
				技术是开发它的人的共同灵魂。
			</zmbl-notice-bar>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.demo-block {
		background: #fff;
	}
	h3 {
		margin: 0;
		padding: 32px 16px 16px;
		color: rgba(69, 90, 100, 0.6);
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
	}
	.zmbl-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }
</style>