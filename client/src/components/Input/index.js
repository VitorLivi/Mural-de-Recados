import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, DefaultInput, InputIcon, InputLabel, InputContainer } from './style'

function Input (props) {
  const onClickIcon = () => {
    if (props.onClickIcon) {
      props.onClickIcon()
    }
  }

  function getIcon () {
    if (props.icon) {
      return (
        <InputIcon onClick={onClickIcon()} src={props.icon} />
      )
    }

    return null
  }

  function getLabel () {
    if (props.label) {
      return (
        <InputLabel>{props.label}</InputLabel>
      )
    }
  }

  return (
    <InputContainer>
      {getLabel()}
      <InputWrapper>
        {getIcon()}
        <DefaultInput type={props.type} style={props.style} value={props.value}/>
      </InputWrapper>
    </InputContainer>
  )
}

Input.propTypes = {
  icon: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  onClickIcon: PropTypes.func
}

export default Input
