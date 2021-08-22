const db = require('./connection')

module.exports = {
  promiseQuery: (query, values) => {
    return new Promise ((resolve, reject) => {
      db.query(query, values, (error, result) => {
          if (error) {
            reject(error)
          }

          resolve(result)
      })
    })
  }
}