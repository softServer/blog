# theme-blog

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 下一步
1、写死导航
2、导航跳转页面
3、文章实现动态数据加载
4、实现登陆，权限控制



# 环境配置
生产环境解决跨域问题
## 开发环境
由于开发环境使用了本地服务，而且本地网页也是本地域名（localhost/127.0.0.1）所以不存在跨域问题。如果你使用远端服务，存在跨域问题可以仿照生产环境的解决思路
## 生产环境
服务端的解决是必须的，这里不做介绍

1、客户端（前端） 修改baseUrl.js 文件 配置服务器路径为api 
``` 
baseUrl = '/api' // 生产环境url 正常情况为 http://127.0.0.1:8881
```
2、配置nginx 配置文件 添加

```
location /api {                                # 自定义nginx接口前缀
    proxy_pass   http://127.0.0.1:8881/;       # 后台api接口地址 以/结尾，uri截掉/api
            proxy_redirect default;      
    #设置主机头和客户端真实地址，以便服务器获取客户端真实IP
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;   
}
```

