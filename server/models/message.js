const { promiseQuery } = require('../database/helpers')

const message = {
    getAllMessages: () => {
      const query = 'SELECT * FROM message'

      return promiseQuery(query)
    },

    createNewMessage: (data) => {
      const query = 'INSERT INTO message (User, Message, Private, CreateAt) VALUES (?, ?, ?, NOW())'

      const values = [
        data.user,
        data.message,
        data.private
      ]

      return promiseQuery(query, values)
    }
}

module.exports = message