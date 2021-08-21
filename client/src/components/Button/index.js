import React from 'react'
import PropTypes from 'prop-types'

import { DefaultButton } from './style'

function Button (props) {
  const onClick = () => {
    const { onClick } = props

    if (onClick) {
      onClick()
    }
  }

  return (
    <DefaultButton onClick={onClick}>
      {props.text}
    </DefaultButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button
