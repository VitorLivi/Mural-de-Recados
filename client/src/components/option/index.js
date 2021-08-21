import React from 'react'
import PropTypes from 'prop-types'

import { OptionCheckbox, OptionLabel, OptionWrapper } from './style'

function Option (props) {
  return (
    <OptionWrapper>
      <OptionCheckbox type='checkbox'/>
      <OptionLabel>{props.label}</OptionLabel>
    </OptionWrapper>
  )
}

Option.propTypes = {
  label: PropTypes.string
}

export default Option
