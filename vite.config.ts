import { defineConfig, resolveConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  // resolve: {
  //   alias: {
  //     "@": resolveConfig(__dirname, "./src")
  //   }
  // },
  // 服务配置
  server: {
    // 主机
    host: true,
    // 端口
    port: 3000,
    // 启动打开浏览器
    open: false,
    // 允许跨域
    cors: true,
    // 代理
    proxy:{}
  },
  plugins: [
    vue(),
    WindiCSS(),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    }),
  ],
})
