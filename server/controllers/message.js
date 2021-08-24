const express = require('express')
const Message = require('../models/message')
const router = express.Router()

const AuthMiddleware = require('../middlewares/auth')

router.use(AuthMiddleware)

router.get('/', async function(req, res) {
  try {
    let messages = await Message.getAllMessages();

    return res.status(200).send({success: true, data: messages})
  } catch (error) {
    return res.status(400).send({success: false, msg: 'Error fetching data'})
  }
});

router.post('/', async function(req, res) {
  try {
    await Message.createNewMessage(req.body)

    return res.status(200).send({success: true})
  } catch (error) {
    return res.status(400).send({success: false, msg: 'Error inserting message'})
  }
});

module.exports = router;
