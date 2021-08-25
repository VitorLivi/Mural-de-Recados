const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const AuthMiddleware = require('../middlewares/auth')
const User = require('../models/user')

router.post('/', async function(req, res) {

  let user = await User.userAuthenticate(req.body);

  if (!user || user.length < 1) {
    return res.status(400).send({ error: 'Invalid login information' })
  }

  if (req.body.password !== user[0].password) {
    return res.status(400).send({ error: 'Invalid login information' })
  }

  user[0].password = undefined

  const token = jwt.sign({id: user[0].id}, process.env.JWT_SECRET, {
    expiresIn: 86400
  })

  return res.status(200).send({
    msg: 'Authenticated',
    token: token,
    user: user[0]
  })
});


router.post('/validate',  AuthMiddleware, async (req, res) => {
  try {
    let user = await User.getUserById(req.userId)
    return res.status(200).send({user: user[0]})
  } catch (error) {
    return res.status(500).send({error: 'Error on validate user'})
  }
});

module.exports = router;
