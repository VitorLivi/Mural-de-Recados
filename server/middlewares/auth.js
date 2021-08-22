const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({success: false, msg: 'No token provided'})
  }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) {
    return res.status(401).send({success: false, msg: 'Token error'})
  }

  const [ scheme, token ] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({success: false, msg: 'Token malformatted'})
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({success: false, msg: 'Invalid token'})
    }

    req.userId = decoded.id
    return next()
  })
}