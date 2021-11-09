import NavConfig from './nav.config.json';
/* Layout */
import Layout from 'docs/layout'

const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page => {
      const docsPath = page.path.replace('/docs/', '')
      console.log(docsPath)
      route.push({
        name: `Docs${page.name}`,
        path: page.path,
        component: () => import(`zmbl-ui/packages/${docsPath}/README.md`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    }
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

/* route.route.push({
  path: '/',
  component: () => import('./demos.vue')
}); */
export const navs = route.navs;
export default [{
  path: '/',
  component: () => import('./demos.vue')
},{
  path: '/docs',
  component: Layout,
  children: route.route
}];
