import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Navbar from '../../Interfaces/Navbar'
import ViewPass from '../../Assets/Icons/icon-view_pass.svg'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

import { loginAction } from '../../Redux/Actions/authActions'
import { useDispatch } from 'react-redux'

import { FormLogin, FormWrapper, LoginTitle, ButtonWrapper } from './style'

function Login (props) {
  const [viewPassword, setViewPassword] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const getPasswordType = () => {
    if (viewPassword) {
      return 'text'
    }

    return 'password'
  }

  const changePasswordFieldType = () => {
    setViewPassword(!viewPassword)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    await loginAction(userName, password, props.history, dispatch)
  }

  return (
        <div>
            <Navbar history={props.history}/>
            <FormWrapper>
              <LoginTitle>Acesso Restrito</LoginTitle>
              <FormLogin onSubmit={ onSubmit }>
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
