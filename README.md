## 简介

行情不好，为了快速接私活。在 github 找了找，都是几年前的模板项目。只有自己创建一个当前最新版的模板项目。  
本项目是修改，<a href="https://github.com/NLRX-WJC/react-antd-admin-template">https://github.com/NLRX-WJC/react-antd-admin-template</a> 项目来的。

个人认为，每个项目需求都不一样，定制化功能在开发中自己封装组件更好。就只完成了简化版的模板项目，权限（路由）验证、动态侧边栏、动态面包屑、本地/后端 mock 数据、全屏、自适应收缩侧边栏、剪贴板。   

如果本项目对你有帮助，请点个赞。

![1](https://user-images.githubusercontent.com/26473539/227225528-bbe16130-5dcb-4149-9096-962641e50b62.png)


## 依赖包版本

项目是用 create-react-app 创建，2023 年版本。

- "react": "^18.2.0"
- "react-router-dom": "^5.3.4"
- "redux": "^4.2.1"
- "react-redux": "^8.0.5"
- "antd": "^5.3.2"
- "axios": "^1.3.4"
- "nprogress": "^0.2.0"
- "screenfull": "^6.0.2"
- "mockjs": "^1.1.0",
- "react-app-rewired": "^2.2.1"
- "customize-cra": "^1.0.0",

## 目录

```
├─ .vscode                    # vscode工具设置
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ config                 # 全局配置
│   │   ├─ menuConfig.js      # 路由、菜单配置
│   ├─ mock                   # 项目mock 模拟数据
│   ├─ store                  # 全局 store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ views                  # views 所有页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.js                # 源码入口
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
└── package.json              # package.json
```
