import { createRouter, createWebHashHistory } from 'vue-router'

import { RootRoute } from './path'

const route = (path: string, view: string, name: string, meta: string, props: string) => {
    return {
        name: name || view,
        path: path,
        meta: meta,
        props: props,
        component: (resolve => import(`../views/${view}.vue`).then(resolve))
    }
}

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: RootRoute.map(path =>
        route(path.path, path.view, path.name, path.meta, path.props))
        .concat([
            { path: '/:pathMatch(.*)', redirect: { name: '/' } },
        ]),
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition)
                } else {
                  const position = {
                      selector: '',
                      left: 0,
                      top: 0
                  }
                  if (to.hash) {
                      position.selector = to.hash
                  }
                  // check if any matched route config has meta that requires scrolling to top
                  if (to.matched.some(m => m.meta.scrollToTop)) {
                      // cords will be used if no selector is provided,
                      // or if the selector didn't match any element.
                      position.left = 0
                      position.top = 0
                  }
                  // if the returned position is falsy or an empty object,
                  // will retain current scroll position.
                  resolve(position)
                }
            }, 500)
        })
    }
})

export default router
