import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../interfaces/navbar'

import { LoginBackground, FormLogin, FormWrapper, LoginTitle } from './style'

function Login (props) {
  const { history } = props

  return (
        <LoginBackground>
            <Navbar history={history} />
            <FormWrapper>
              <LoginTitle></LoginTitle>
              <FormLogin>
              </FormLogin>
            </FormWrapper>
        </LoginBackground>
  )
}

Login.propTypes = {
  history: PropTypes.func
}

export default Login
