var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET users listing. */
router.get('/getPageList', function(req, res, next) {
  const { user } = req
  const { uid } = user
  const sql = `select page.pageId, pageName, pageDescription, pageStatus from page, user_page where page.pageId = user_page.pageId and user_page.uid = '${uid}'`
  db.query(sql, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    res.send({
      code: 200,
      data: rows,
      msg: 'success'
    })
  })
});

router.post('/createPage', (req, res, next) => {
  const { body, user } = req
  const { uid } = user
  const { pageName, pageDescription, pageStatus } = body
  const sql1 = `insert into page(\`pageName\`, \`pageDescription\`, \`pageStatus\`) values('${pageName}', '${pageDescription}', '${pageStatus}')`
  db.query(sql1, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    const { insertId } = rows
    const sql2 = `insert into user_page values('${uid}', ${insertId})`
    db.query(sql2, (err) => {
      if (err) {
        return res.send({
          code: 1,
          msg: '数据库出大事了'
        })
      }
      res.send({
        code: 200,
        msg: 'success'
      })
    })
  })
})


router.post('/editPage', (req, res, next) => {
  const { body } = req
  const { pageId, pageName, pageDescription, pageStatus } = body
  const sql = `update page set pageName = '${pageName}', pageDescription = '${pageDescription}', pageStatus = ${pageStatus} where pageId = ${pageId}`
  db.query(sql, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    res.send({
      code: 200,
      msg: 'success'
    })
  })
})

router.post('/deletePage', (req, res, next) => {
  const { body, user } = req
  const { pageId  } = body
  const { uid } = user
  console.log('pageId', pageId)
  const sql = `delete from page where pageId = ${pageId}`
  db.query(sql, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    const sql2 = `delete from user_page where pageId = ${pageId} and uid = ${uid}`
    db.query(sql2, (err) => {
      if (err) {
        return res.send({
          code: 1,
          msg: '数据库出大事了'
        })
      }
      res.send({
        code: 200,
        msg: 'success'
      })
    })

  })
})

router.post('/saveJson', (req, res, next) => {
  const { body, user } = req
  const { pageId, json } = body
  const { uid } = user
  // 此处没有考虑到uid的问题
  const sql = `update page set pageJson = '${json}' where pageId = ${pageId}`
  db.query(sql, (err, rows) => {
    if (err) {
      return res.send({
        code: 1,
        msg: '数据库出大事了'
      })
    }
    res.send({
      code: 200,
      msg: 'success'
    })
  })
})

router.post('/getJson', (req, res, next) => {
  console.log('进入')
  const { body, user } = req
  const { pageId, json } = body
  const { uid } = user
  // 此处没有考虑到uid的问题
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
