import Vue from 'vue';
import App from './app';
import routes from './route';
import {install as Mint} from 'src/index';
// import 'zmbl-ui/lib/zmbl-ui.common.css'
import './assets/styles/color-brewer.css'
import './assets/styles/index.scss'
import VueRouter from 'vue-router';

import hljs from 'highlight.js'

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes
});
router.beforeEach((to, from, next) => {
  // ViewUI.LoadingBar.start();
  next()
})
router.afterEach(() => {
  // ViewUI.LoadingBar.finish();
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})
new Vue({ // eslint-disable-line
  el: '#app1',
  render: h => h(App),
  router
});
