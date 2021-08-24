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

  return (
    <TextAreaLayout value={props.value} onChange={onChange}/>
  )
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Textarea
