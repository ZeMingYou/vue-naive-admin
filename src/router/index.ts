import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 白名单路由
import rootRouter from '@/router/root'

// 导入需要导入的文件
const modules = import.meta.globEager('./modules/**/*.ts')

// 文件数据处理好的路由列表
const routeModules: Array<RouteRecordRaw> = []

// 处理路由
Object.keys(modules).forEach((key: string) => {
  const route = modules[key]?.default || {}
  const routes = Array.isArray(route) ? [...route] : [route]
  routeModules.push(...routes)
})

// 白名单路由,无需任何权限，即可进入。
export const whiteRouter: Array<any> = [...rootRouter]

/**
 * 创建路由实例并传递 `routes` 配置
 * 高级匹配模式可自行查找文档进行选配
 */
const routes = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    // 添加到路由的初始路由列表
    routes: whiteRouter,
    // 大小写敏感
    sensitive: true,
    // 末尾斜杠是否精确匹配
    strict: true,
    // 始终滚动到左上角顶部
    scrollBehavior: () => ({ left: 0,top: 0, behavior: 'smooth' })
})

export default routes
