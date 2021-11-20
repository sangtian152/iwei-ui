<template>
	<div class="page-navbar">
		<div class="page-title">NoticeBar</div>
		<h3>基础用法</h3>
		<zmbl-notice-bar scrollable text="Technology is the common soul of the people who developed it." left-icon="volume-o" />
		<h3>滚动播放</h3>
		<zmbl-notice-bar scrollable text="技术是开发它的人的共同灵魂。" />

		<zmbl-notice-bar
			:scrollable="false"
			text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
		/>
		<h3>多行展示</h3>
		<zmbl-notice-bar
			wrapable
			:scrollable="false"
			text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
		/>
		<h3>通知栏模式</h3>
		<!-- closeable 模式，在右侧显示关闭按钮 -->
		<zmbl-notice-bar mode="closeable">技术是开发它的人的共同灵魂。</zmbl-notice-bar>

		<!-- link 模式，在右侧显示链接箭头 -->
		<zmbl-notice-bar mode="link">技术是开发它的人的共同灵魂。</zmbl-notice-bar>
		<h3>自定义样式</h3>
		<zmbl-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
			技术是开发它的人的共同灵魂。
		</zmbl-notice-bar>
	</div>
</template>