import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

const resolve = (url: string) => {
  return path.resolve(__dirname, url)
}

export default defineConfig({
  // 配置选项
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Components({
      // 用于搜索组件的目录的相对路径。
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      resolvers: [NaiveUiResolver()],
      dts: true,
      directoryAsNamespace: false,
      directives: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
    })
  ],
  resolve: {
    /**
     * 别名
     * 不再需要像vite1一样在别名前后加上/
    */
    alias: {
      '～/': resolve('src/'),
      'c/': resolve('src/components/')
    },
    dedupe: ['vue']
  },
  server: {
    // 在开发服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。
    open: true,
    host: true,
    port: 10086,
    // 为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。如果 key 值以 ^ 开头，将会被解释为 RegExp。configure 可用于访问 proxy 实例。
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com', // 要使用 url 模块解析的 url 字符串
        changeOrigin: true, // Default: false - 将主机头的来源更改为目标 URL
        rewrite: (path) => path.replace(/^\/api/, '') // 将指定的字符串替换为目标url字符串
      },
       // 正则表达式写法
      //  '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // },
      // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   }
      // }
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router'
    ]
  }

})
