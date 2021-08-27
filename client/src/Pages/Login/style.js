import styled from 'styled-components'

export const FormWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
`

export const LoginTitle = styled.h1`
  font-family: RobotoLight;
  font-weight: lighter;
  margin-bottom: 40px;
  font-size: 32px;
  color: #000;
`

export const ButtonWrapper = styled.div`
  float: right;
  width: 100px;
  height: 45px;
  margin-top: 20px;
  align-self: flex-end;
`
