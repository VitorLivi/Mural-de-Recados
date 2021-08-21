import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../assets/images/logo-tiki.svg'

import { NavbarWrapper, NavbarLogo, Nav, PageInfo } from './style'

function Navbar () {
  return (
        <NavbarWrapper>
          <PageInfo>
            <NavbarLogo src={Logo} />
            <span>Interface de teste</span>
          </PageInfo>
          <Nav></Nav>
        </NavbarWrapper>
  )
}

Navbar.propTypes = {
  history: PropTypes.func
}

export default Navbar
