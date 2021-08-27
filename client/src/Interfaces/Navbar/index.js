import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import Logo from '../../Assets/Images/logo-tiki.svg'
import ImageUser from '../../Assets/Images/avatar-joseph.jpg'
import LogoutImage from '../../Assets/Icons/icon-logout.svg'

import { logoutAction } from '../../Redux/Actions/authActions'

import { NavbarWrapper, NavbarLogo, Nav, PageInfo, LogoutIcon, UserImage } from './style'

function Navbar ({ history }) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onClickLogout = () => {
    history.push('/')
    dispatch(logoutAction())
  }

  function getNavUser () {
    if (user?.username) {
      return (
        <Nav>
          <UserImage src={ImageUser} />
          {user.username}
          <LogoutIcon onClick={onClickLogout} src={LogoutImage}/>
        </Nav>
      )
    }

    return null
  }

  return (
        <NavbarWrapper>
          <PageInfo>
            <NavbarLogo src={Logo}/>
            <span>Interface de teste</span>
          </PageInfo>
          {getNavUser()}
        </NavbarWrapper>
  )
}

Navbar.propTypes = {
  history: PropTypes.object
}

export default Navbar
