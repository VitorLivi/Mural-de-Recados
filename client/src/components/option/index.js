import React from 'react'
import PropTypes from 'prop-types'

import { OptionCheckbox, OptionLabel, OptionLayout } from './style'

function Option (props) {
  const { disabled, label } = props

  return (
    <OptionLayout>
      <OptionCheckbox disabled={disabled} type='checkbox'/>
      <OptionLabel disabled={disabled}>{label}</OptionLabel>
    </OptionLayout>
  )
}

Option.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool
}

export default Option
