# mosi_pc

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## 优化策略
1. 性能对比优化
2. 图片（icon）替换为背景图
3. 组件按需加载 （1.6M --> 54kb） is ok 
4. 视屏异步加载 （home_banner）
5. 文件压缩(js css) is ok
6. 服务端系统缓存 is ok
7. 字体文件过大
8. worning
9. jquery 替换 is ok
10. webpack 优化
    splitChunks 抽取公共文件 is ok
    公共css 抽离 is ok
    tree sharking is ok
    iview css 过大（266kb） is ok
    打包缓存 is ok

## 其他优化

1. 推送到cdn服务器（有条件的话）
2. nginx打开gzip 
3. nginx 客户端缓存
4. 部署脚本优化（同步代码不删除，install）
5. pm2集群（根据服务器核数）
6. 错误页面（404，500）



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
