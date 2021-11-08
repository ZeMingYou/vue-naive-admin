/* 白名单路由(无需任何权限可随意进入) */
import { RouteRecordRaw } from "vue-router"

/**
 * https://next.router.vuejs.org/zh/api/#routerecordraw
 * @param {string} path 路由记录路径
 * @param {string} name 路由名称, 必须设置，且不能重名
 * @param {string, Component} component 路由模版
 * @param {*} redirect 重定向地址，访问路由时，重定向到对应路由。
 * @param {*} meta 路由元信息
 * @param {string} meta.title 菜单名称
 * @param {string} meta.icon 菜单图标
 * @param {boolean} meta.keeAlive 路由是否开启缓存，默认：开启（true）
 * @param {Array} children 路由记录数组
*/
const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'path',
      redirect: '/login',
      meta: {
        title: 'path'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('~/views/login/index.vue'),
      meta: {
        title: '登录'
      }
    }
];

export default routes
