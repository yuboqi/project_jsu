const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false, // 关闭eslint

  // 代理路径
  devServer: {
    proxy: {
      '/api': {
        target: '地址'
        // pathRewrite:{'^/api':''}//重写地址：因为后面都是接着api所以不需要写
      }
    }
  },
  // 配置pc端适配
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16, // 换算的基数
            minPixelValue: 2,
            selectorBlackList: [], // 忽略转换正则匹配项 列入一些ui库, ['.el'] 就是忽略elementUI库
            propList: ['*']
          })
        ]
      }
    }
  }

})
