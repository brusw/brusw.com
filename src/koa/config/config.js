module.exports = {
  environment: 'dev',
  database: {
    dbName: 'blog',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    logging: false,
    timezone: '+08:00'
  },
  paginate: {
    pageDefault: 0,     // 默认页码
    countDefault: 10    // 默认一页的数量
  },
  // JWT
  security: {
    // secretKey 需要比较复杂的字符串
    secretKey: 'secretKey',
    accessExp: 60 * 60,  // 1h
    // accessExp: 20,  // 20s 测试令牌过期
    // refreshExp 设置refresh_token的过期时间，默认一个月
    refreshExp: 60 * 60 * 24 * 30,
  },
  // 文件上传
  file: {
    singleLimit: 1024 * 1024 * 2, // 单个文件大小限制
    totalLimit: 1024 * 1024 * 20, // 多个文件大小限制
    count: 10,                    // 单次最大上传数量
    exclude: []                   // 禁止上传格式
    // include:[]
  },
  // 七牛相关配置
  qiniu: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    siteDomain: ''
  },
  host: 'http://localhost:3000'
}
