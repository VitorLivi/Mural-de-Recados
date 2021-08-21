import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, DefaultInput, InputIcon, InputLabel, InputContainer } from './style'

function Input (props) {
  const onClickIcon = () => {
    const { onClickIcon } = props

    if (onClickIcon) {
      onClickIcon()
    }
  }

  const onChange = (e) => {
    const { onChange } = props

    if (onChange) {
      onChange(e?.target?.value)
    }
  }

  function getIcon () {
    const { icon } = props

    if (icon) {
      return (
        <InputIcon onClick={onClickIcon} src={icon} />
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
        <DefaultInput {...props}
          icon={props.icon}
          onChange={onChange}
          type={props.type}
          style={props.style}
        />
      </InputWrapper>
    </InputContainer>
  )
}

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClickIcon: PropTypes.func
}

export default Input
