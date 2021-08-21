import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, DefaultInput, InputIcon, InputLabel, InputLayout } from './style'

function Input (props) {
  function iconEvent () {
    const { iconEvent } = props

    if (iconEvent) {
      iconEvent()
    }
  }

  const onChange = (e) => {
    const { onChange } = props

    if (onChange) {
      onChange(e.target.value)
    }
  }

  function getIcon () {
    const { icon } = props

    if (icon) {
      return (
        <InputIcon onClick={() => iconEvent()} src={icon} />
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
    <InputLayout>
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
    </InputLayout>
  )
}

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  iconEvent: PropTypes.func
}

export default Input
