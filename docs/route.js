import {NavConfig} from '../nav.config';
/* Layout */
import Layout from 'docs/layout'

const config = NavConfig()

const registerRoute = (config) => {
  let route = [];
  config.map(nav => {
    nav.list.map(page => {
      const dirName = page.path.split('/').pop()
      route.push({
        name: page.name,
        path: page.path,
        component: () => import(`zmbl-ui/packages/${dirName}/README.md`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    })
  });

  return { route, navs: config };
};

const constantRoutes = [
  {
    path: '/quickstart',
    name: 'Quickstart',
    component: () => import(`docs/pages/Quickstart.md`),
    meta: {
      demo: '/'
    }
  }
]

const route = registerRoute(config);

export const navs = constantRoutes.concat(route.navs);

export default [{
  path: '/',
  redirect: '/quickstart',
  component: Layout,
  children: constantRoutes.concat(route.route)
}];
