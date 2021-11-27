import {NavConfig} from '../nav.config';

const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: () => import(/* webpackChunkName: "chunk-example" */ `./pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig());

route.route.push({
  path: '/',
  component: () => import('./demos.vue')
});
console.log(route, 30)
export const navs = route.navs;
export default route.route;
