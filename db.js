const mysql = require('mysql')

const db = {}

let pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
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
