const { promiseQuery } = require('../database/helpers')

const user = {
    userAuthenticate: (data) => {
      const query = "SELECT id, username, password FROM user WHERE username = ?"

      const values = [
          data.username
      ]

      return promiseQuery(query, values)
    },

    getUserById: (id) => {
      const query = "SELECT id, username FROM user WHERE ID = ?"

      const values = [
        id
      ]

      return promiseQuery(query, values)
    }
}

module.exports = user