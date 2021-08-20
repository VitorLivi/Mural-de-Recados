import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../interfaces/navbar'

function Login (props) {
  const { history } = props

  return (
        <div>
            <Navbar history={history} />
            <h1>login</h1>
        </div>
  )
}

Login.propTypes = {
  history: PropTypes.func
}

export default Login
