import React from 'react'
import PropTypes from 'prop-types'

import { OptionCheckbox, OptionLabel, OptionLayout } from './style'

function Option (props) {
  const { disabled, label } = props

  const onSelect = () => {
    const { selectEvent } = props

    if (selectEvent) {
      selectEvent()
    }
  }

  return (
    <OptionLayout>
      <OptionCheckbox checked={props.checked} onChange={onSelect} disabled={disabled} type='checkbox'/>
      <OptionLabel disabled={disabled}>{label}</OptionLabel>
    </OptionLayout>
  )
}

Option.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  selectEvent: PropTypes.func,
  checked: PropTypes.bool.isRequired
}

export default Option
