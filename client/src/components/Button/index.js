import React from 'react'
import PropTypes from 'prop-types'

import { ButtonLayout } from './style'

function Button (props) {
  const onClick = () => {
    const { onClick } = props

    if (onClick) {
      onClick()
    }
  }

  return (
    <ButtonLayout {...props} onClick={onClick}>
      {props.text}
    </ButtonLayout>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string
}

export default Button
