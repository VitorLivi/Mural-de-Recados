const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/authenticate', async function(req, res) {

  let user = await User.userAuthenticate(req.body);

  if (!user || user.length < 1) {
    return res.status(400).send({success: false, msg: 'Invalid login information'})
  }

  if (req.body.password !== user[0].password) {
    return res.status(400).send({success: false, msg: 'Invalid login information'})
  }

  user[0].password = undefined

  const token = jwt.sign({id: user[0].id}, process.env.JWT_SECRET, {
    expiresIn: 86400
  })

  return res.status(200).send({
    success: true,
    data: {
      user: user[0],
      token: token
    }
  })
});

module.exports = router;
