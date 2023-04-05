import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts:'auto/import.d.ts',
      imports: ['vue'],
      // 第三方组件库的解析器
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts:'auto/components.d.ts',
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue'],
      resolvers: [ElementPlusResolver()], 
    }),
  ],
  resolve:{
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
  },
  extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
})
