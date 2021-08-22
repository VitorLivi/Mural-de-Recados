const db = require('../database/connection')

const { promiseQuery } = require('../database/helpers')

const user = {
    userAuthenticate: (data) => {
      const query = "SELECT id, username, password FROM user WHERE username = ?"

      const values = [
          data.username
      ]

      return promiseQuery(query, values)
    }
}

module.exports = user