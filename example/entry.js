import Vue from 'vue';
import App from './app';
import routes from './route';
import { install as Mint } from 'zmbl-ui';
import 'zmbl-ui/lib/index/style.css'
import VueRouter from 'vue-router';
// import { Popper, Button } from 'zmbl-ui';
document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);
// Vue.use(Popper);
// Vue.use(Button);
Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});
/* let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
}); */
