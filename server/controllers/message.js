const express = require('express')
const Message = require('../models/message')
const router = express.Router()
const AuthMiddleware = require('../middlewares/auth')

const SharedHelpers = require('../helpers/sharedHelpers')

router.use(AuthMiddleware)

router.post('/all', async function(req, res) {
  try {
    let messages = await Message.getAllMessages();

    return res.status(200).send(messages)
  } catch (error) {
    return res.status(400).send({ error: 'Error fetching data' })
  }
});

router.post('/', async function(req, res) {

  const exeededLength = SharedHelpers.validateStringLength(req.body?.message || '', 255)

  if (exeededLength) {
    res.status(400).send({ error: exeedLength })
  }

  try {
    const { insertId } = await Message.createNewMessage(req.body)
    const insertedMessage = await Message.getMessageById(insertId)

    return res.status(200).send(insertedMessage[0])
  } catch (error) {
    return res.status(400).send({ error: 'Error inserting message' })
  }
});

module.exports = router;
