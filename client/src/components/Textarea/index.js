import React from 'react'

import { TextAreaLayout } from './style'
import PropTypes from 'prop-types'

function Textarea (props) {
  function onChange (e) {
    const { onChange } = props

    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <TextAreaLayout onChange={onChange} {...props}>{props.value}</TextAreaLayout>
  )
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Textarea
