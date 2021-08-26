const { promiseQuery } = require('../database/helpers')

const message = {
    getAllMessages: () => {
      const query = 'SELECT MSG.*, USR.Username FROM MESSAGE MSG LEFT JOIN USER USR ON (MSG.User = USR.ID) ORDER BY CreateAt DESC'

      return promiseQuery(query)
    },
    getMessageById: (id) => {
      const query = 'SELECT MSG.*, USR.Username FROM MESSAGE MSG LEFT JOIN USER USR ON (MSG.User = USR.ID) WHERE MSG.ID = ?'

      return promiseQuery(query, [id])
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