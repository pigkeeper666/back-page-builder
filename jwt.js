// token中间件
const expressJwt = require('express-jwt')
const { SECRETKEY } = require('./constant')

const jwtAuth = expressJwt({
  secret: SECRETKEY,
  algorithms: ['HS256']
}).unless({
  path: ['/login', '/out']
})

module.exports = jwtAuth
