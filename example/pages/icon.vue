<template>
	<div class="page-icon">
		<div class="page-title">Icon</div>
		<ul class="icon-list">
		  <li v-for="name in icon" :key="name">
		    <span @click="copy(name)">
		      <zmbl-icon :name="name"></zmbl-icon>
		      <span class="icon-name">{{name}}</span>
		    </span>
		  </li>
		</ul>
	</div>
</template>
<script>
	import icon from 'example/icon.json';
	// from https://30secondsofcode.org
	function copyToClipboard(str) {
	  const el = document.createElement('textarea');
	  el.value = str;
	  el.setAttribute('readonly', '');
	  el.style.position = 'absolute';
	  el.style.left = '-9999px';
	  document.body.appendChild(el);

	  const selected =
	    document.getSelection().rangeCount > 0
	      ? document.getSelection().getRangeAt(0)
	      : false;

	  el.select();
	  document.execCommand('copy');
	  document.body.removeChild(el);

	  if (selected) {
	    document.getSelection().removeAllRanges();
	    document.getSelection().addRange(selected);
	  }
	}
	export default {
		data(){
			return {
				icon: icon
			}
		},
		methods:{
			copy(icon, option = {}) {
	      let tag = `<zmbl-icon name="${icon}"`;
	      if ('dot' in option) {
	        tag = `${tag} ${option.dot ? 'dot' : ''}`;
	      }
	      if ('badge' in option) {
	        tag = `${tag} badge="${option.badge}"`;
	      }
	      if ('color' in option) {
	        tag = `${tag} color="${option.color}"`;
	      }
	      if ('size' in option) {
	        tag = `${tag} size="${option.size}"`;
	      }
	      tag = `${tag} />`;
	      copyToClipboard(tag);

	      this.$toast('复制成功');
	    },
		}
	}
</script>
<style lang="scss" scoped>
	.icon-list {
		display: flex;
		flex-wrap: wrap;
		li {
			width: 33%;
			text-align: center;
			padding: 8px 0;
			cursor: pointer;
		}
		.iconfont {
			font-size: 30px;
		}
		.icon-name {
			display: block;
			font-size: 12px;
		}
	}
</style>