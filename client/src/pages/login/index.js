import React, { useState } from 'react'

import axios from 'axios'
import PropTypes from 'prop-types'

import Navbar from '../../Interfaces/Navbar'
import ViewPass from '../../Assets/Icons/icon-view_pass.svg'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

import { FormLogin, FormWrapper, LoginTitle, ButtonWrapper } from './style'

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

  const login = (e) => {
    e.preventDefault()
    e.stopPropagation()

    axios.post('http://localhost:5000/auth', { username: userName, password: password })
      .then(({ data }) => {
        window.localStorage.setItem('recadosToken', data.token)
        props.history.push('/Messages')
      })
      .catch(err => { alert(err?.response?.data?.error) })
  }

  return (
        <div>
            <Navbar/>
            <FormWrapper>
              <LoginTitle>Acesso Restrito</LoginTitle>
              <FormLogin onSubmit={ login }>
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
                  iconEvent={changePasswordFieldType}
                />
                <ButtonWrapper>
                  <Button type='submit' text='Entrar'/>
                </ButtonWrapper>
              </FormLogin>
            </FormWrapper>
        </div>
  )
}

Login.propTypes = {
  history: PropTypes.object
}

export default Login
