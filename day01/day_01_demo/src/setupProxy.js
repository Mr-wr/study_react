const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // 因为可能有多个代理
  app.use(
    // 发请求以这个开头的都
    createProxyMiddleware('/zhi', {
    //   target: 'https://www.zhihu.com/api/v4',
      target: 'https://news-at.zhihu.com/api/4',
    //   target: 'https://www.news-at.zhihu.com/api/4',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/zhi': '' },
    })
  );
  app.use(
    // 发请求以这个开头的都
    createProxyMiddleware('/jian', {
      target: 'https://www.jianshu.com/asimov',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/jian': '' },
    })
  );
};
