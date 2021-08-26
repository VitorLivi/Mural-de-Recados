import React from 'react'

import { TextAreaLayout } from './style'
import PropTypes from 'prop-types'

function Textarea (props) {
  const onChange = (e) => {
    const { onChange } = props

    if (onChange) {
      onChange(e.target.value)
    }
  }

  const { value, maxLength, placeHolder } = props

  return (
    <TextAreaLayout placeholder={ placeHolder } maxLength={maxLength} value={value} onChange={onChange}/>
  )
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  placeHolder: PropTypes.string
}

export default Textarea
