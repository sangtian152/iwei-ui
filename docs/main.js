import Vue from 'vue';
import App from './app';
import routes from './route';

import VueRouter from 'vue-router';
import ViewUI from 'view-design';
import hljs from 'highlight.js'

import 'view-design/dist/styles/iview.css'

import 'imd-loader/css/index.css'

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);
Vue.use(ViewUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next()
})
router.afterEach(() => {
  setTimeout(() => {
    ViewUI.LoadingBar.finish();
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }, 100)
})
new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#docs-app');
