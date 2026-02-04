# React MUI Template

这是一个简化的 React + MUI + TypeScript 项目模板，用于从 WPF 迁移到 MUI/React。

## 技术栈

- React 18.2.0
- MUI (Material-UI) 5.18.0
- TypeScript 5.9.3
- Vite 5.0.8

## 快速开始

1. 复制模板文件夹到你的项目位置
2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 构建生产版本：
```bash
npm run build
```

## 项目结构

```
React-template/
├── src/
│   ├── App.tsx          # 应用根组件（提供 ThemeProvider 和 CssBaseline）
│   ├── MainWindow.tsx   # 主界面组件（应用的主窗口 UI）
│   ├── main.tsx         # React 入口文件
│   └── index.css        # 全局样式
├── index.html           # HTML 入口文件
├── package.json         # 项目配置和依赖管理
├── tsconfig.json        # TypeScript 项目引用配置
├── tsconfig.app.json    # 应用代码的 TypeScript 配置
├── tsconfig.node.json   # Node.js 环境的 TypeScript 配置
├── vite.config.ts       # Vite 构建工具配置
├── eslint.config.js     # ESLint 代码检查配置
└── README.md           # 项目说明文档
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装所有依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run lint` | 运行 ESLint 代码检查 |
| `npm run preview` | 预览生产构建 |
