// import path from "path"; //參考範例新增這行

import { fileURLToPath, URL } from 'node:url' //按照先前寫法
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueDevTools(), vue()],
  //參考範例新增這行
  // resolve: {
  //   alias: {
  //     "@/": `${path.resolve(__dirname, "src")}/`,
  //   },
  // },
  
  //按照先前寫法
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 將所有引入 Vue 的模組都指向 vue/dist/vue.esm-bundler.js
      vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
});
