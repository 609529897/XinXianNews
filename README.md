# 新鲜新闻

使用 React-responsive 实现 PC 和移动端双端平台的新闻资讯 Web 网站

## 技术栈

- 框架:          React
- UI:            Ant Design
- 移动端适配:     React-responsive
- HTTP Request:  Axios

## 主要组件

- header
    + 分类列表
    + 注册 / 登录选项
    + 注册 / 登录表单
    + 提示组件

## 碰到的问题

- 跨域：因为请求的是开放 API，所以需要客户端单方面跨域
- onClick 刷新：触发 onClick 时自动刷新，已经解决：因为 input 的 type 是 submit 所以会自动提交，改成了 button
- key 是 index 必须更改一下