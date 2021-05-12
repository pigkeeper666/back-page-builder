var express = require('express');
var jwt = require('jsonwebtoken')
var { v4: uuidv4 } = require('uuid');
var { SECRETKEY } = require('../constant')
var db = require('../db');
var router = express.Router();

// 登录接口
router.post('/login', (req, res, next) => {
  const { body } = req
  const { username, password } = body
  if (!body) {
    return
  }
  db.query(`select * from user where username = '${username}'`, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    // 没查找到结果 顺便注册
    if (rows.length === 0) {
      const uid = uuidv4()
      db.query(`insert into user VALUES('${uid}', '${username}', '${password}', '${new Date().getTime()}')`, (err) => {
        if (err) {
          return res.send({
            code: 1,
            msg: '注册失败'
          })
        } else {
          let token = jwt.sign({username, uid}, SECRETKEY, {
            expiresIn: 60 * 60 * 24,
          })
          res.send({
            code: 0,
            msg: '注册成功',
            token,
          })
        }
      })
    }
    else {
      // 如果该用户已经注册
      const { password: truePassword, uid } = rows[0]
      if (password === truePassword) {
        let token = jwt.sign({username, uid}, SECRETKEY, {
          expiresIn: 60 * 60 * 24,
        })
        res.send({
          code: 0,
          msg: '登录成功',
          token
        })
      } else {
        res.send({
          code: 1,
          msg: '密码错误'
        })
      }
    }
  })
})

router.post('/out', (req, res, next) => {
  const { body } = req
  const { pageId } = body
  console.log(pageId)
  const sql = `select pageJson from page where pageId = '${pageId}'`
  db.query(sql, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    console.log('rows', rows[0])
    res.send({
      code: 200,
      data: rows[0] || [],
      msg: 'success'
    })
  })
})

module.exports = router;
