const mysql = require('mysql')

const db = {}

let pool = mysql.createPool({
  host: '1.15.135.140',
  user: 'root',
  password: 'snwdIphone6',
  database: 'page_builder'
})

db.query = (sql, callback) => {
  if (!sql) {
    return
  }
  pool.query(sql, (err, rows, fields) => {
    if (err) {
      console.log('err', err)
      callback(err, null)
      return
    }
    callback(null, rows, fields)
  })
}

module.exports = db