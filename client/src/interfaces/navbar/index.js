import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../assets/images/logo-tiki.svg'

import { NavbarWrapper, NavbarLogo, Nav } from './style'

function Navbar () {
  return (
        <NavbarWrapper>
          <NavbarLogo src={Logo} />
          <Nav></Nav>
        </NavbarWrapper>
  )
}

Navbar.propTypes = {
  history: PropTypes.func
}

export default Navbar
