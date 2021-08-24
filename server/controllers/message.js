const express = require('express')
const Message = require('../models/message')
const router = express.Router()

const AuthMiddleware = require('../middlewares/auth')

router.use(AuthMiddleware)

router.get('/', async function(req, res) {
  try {
    let messages = await Message.getAllMessages();

    return res.status(200).send(messages)
  } catch (error) {
    return res.status(400).send({ error: 'Error fetching data' })
  }
});

router.post('/', async function(req, res) {
  try {
    await Message.createNewMessage(req.body)

    return res.status(200).send()
  } catch (error) {
    return res.status(400).send({ error: 'Error inserting message' })
  }
});

module.exports = router;
