import React from 'react'
import PropTypes from 'prop-types'

import { MessagesNavigationItemLayout } from './style'

function MessagesNavigationItem (props) {
  const onClick = () => {
    const { onClick } = props

    if (onClick) {
      onClick(props.index)
    }
  }

  return (
    <MessagesNavigationItemLayout disabled={props.disabled} onClick={onClick}>
      <nav-item>{props.value}</nav-item>
    </MessagesNavigationItemLayout>
  )
}

MessagesNavigationItem.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  index: PropTypes.number
}

export default MessagesNavigationItem
