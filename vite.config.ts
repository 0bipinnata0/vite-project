// vite.config.ts
import { defineConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';
// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
import path from 'path';
import react from '@vitejs/plugin-react';
import StylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  // 手动指定项目根目录位置
  root: path.join(__dirname, '.'), // 指定html的目录位置
  plugins: [
    react(),
    viteEslint(),
    StylelintPlugin({
      // 对某些文件排除检查
      exclude: ['windicss', 'node_modules']
    })
  ]
});
