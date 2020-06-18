# 新鲜新闻

使用 React-responsive 实现 PC 和移动端双端平台的新闻资讯 Web 网站

## 技术栈

- 框架:          React
- UI:            Ant Design
- 移动端适配:     React-responsive
- HTTP Request:  Axios

## 碰到的问题

- 跨域：因为请求的是开放 API，所以需要客户端单方面跨域

在耗费了我整个上午的时间后终于解决了跨域的问题！

```javascript
// setupProxy.js
const {createProxyMiddleware} = require('http-proxy-middleware');//1.0.0版本前都是用proxy,1.0.0后使用porxy会报错,应使用createProxyMiddleware;
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
          '/api',
          {
            target: 'http://v.juhe.cn',
            pathRewrite: {'^/api' : ''},
            changeOrigin: true,     // target是域名的话，需要这个参数，
            secure: false,    
          }
      )
  );
};
```
- onClick 刷新：触发 onClick 时自动刷新，已经解决：因为 input 的 type 是 submit 所以会自动提交，改成了 button
- 目前 key 是 index 需要更好
- 路由跳转，但是跳转到的路由不渲染，解决方法重新配置了一下路由就好使了。。。