import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../interfaces/navbar'

import ViewPass from '../../assets/icons/icon-view_pass.svg'

import { LoginBackground, FormLogin, FormWrapper, LoginTitle, ButtonWrapper } from './style'

import Input from '../../components/Input'
import Button from '../../components/Button'

function Login (props) {
  const [viewPassword, setViewPassword] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const getPasswordType = () => {
    if (viewPassword) {
      return 'text'
    }

    return 'password'
  }

  const changePasswordFieldType = () => {
    setViewPassword(!viewPassword)
  }

  return (
        <LoginBackground>
            <Navbar/>
            <FormWrapper>
              <LoginTitle>Acesso Restrito</LoginTitle>
              <FormLogin>
                <Input value={userName}
                  onChange={setUserName}
                  label='Login'
                  maxLength={100}
                  autoFocus={true}
                />
                <Input value={password}
                  onChange={setPassword}
                  label='Senha'
                  maxLength={100}
                  icon={ViewPass}
                  type={getPasswordType()}
                  onClickIcon={changePasswordFieldType}
                />
                <ButtonWrapper>
                  <Button text='Entrar'/>
                </ButtonWrapper>
              </FormLogin>
            </FormWrapper>
        </LoginBackground>
  )
}

Login.propTypes = {
  history: PropTypes.func
}

export default Login
