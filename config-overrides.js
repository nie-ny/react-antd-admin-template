const { override, overrideDevServer, addLessLoader, adjustStyleLoaders, fixBabelImports } = require('customize-cra')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

/**
 * 自定义 Webpack 配置
 * 配置路径别名
 * @param {*} alias
 * @returns
 */
const addWebpackAlias = alias => config => {
  if (!config.resolve) {
    config.resolve = {}
  }
  if (!config.resolve.alias) {
    config.resolve.alias = {}
  }
  Object.assign(config.resolve.alias, alias)
  return config
}

/**
 * 自定义 Webpack devServer 配置
 * 代理配置
 * @returns
 */
const addProxy = () => configFunction => {
  configFunction.proxy = {
    '/api': {
      target: 'http://www.baidu.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' }
    }
  }
  return configFunction
}

module.exports = {
  webpack: override(
    // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true // 自动打包相关的样式
    }),
    // 使用less-loader对源码中的less的变量进行重新指定
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        relativeUrls: false,
        modifyVars: { '@primary-color': '#A80000' }
      }
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options
      postcss.options = { postcssOptions }
    }),
    // 配置路径别名
    addWebpackAlias({
      '@': resolve('src')
    })
  ),
  devServer: overrideDevServer()
}
