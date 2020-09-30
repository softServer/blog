let baseUrl = '/api' // 本地代理

switch (process.env.NODE_ENV) {
  case 'dev':
    baseUrl = 'http://127.0.0.1:8881' // 开发环境url
    break
  case 'pre':
    baseUrl = 'http://127.0.0.1:8881' // 预上线环境url
    break
  case 'production':
    baseUrl = '/api' // 生产环境url
    break
}
export default baseUrl
