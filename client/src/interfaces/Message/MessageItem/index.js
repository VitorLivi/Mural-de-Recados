import React from 'react'
import PropTypes from 'prop-types'
import Balloon, { TailOptions } from '../../../Components/Balloon'
import MessageProfile from '../../../Components/MessageProfile'
import Profile from '../../../Assets/Images/avatar-joseph.jpg'

import { MessageItemLayout } from './style'

function MessageItem (props) {
  function getTailType () {
    const { TAIL_RIGHT, TAIL_LEFT } = TailOptions

    if (props.isPrivate) {
      return TAIL_RIGHT
    }
    return TAIL_LEFT
  }

  const { isPrivate } = props

  return (
    <MessageItemLayout isPrivate={isPrivate}>
      <MessageProfile image={Profile} name={'Joseph'} />
      <Balloon isPrivate={isPrivate}
        text='Integer id mi sed tellus pretium pharetra et non nulla. Vivamus nec sodales leo, a sagittis erat. Suspendisse potenti. Vivamus pulvinar ligula in sem luctus facilisis. '
        info='Teste'
        tail={getTailType()}/>
    </MessageItemLayout>
  )
}

MessageItem.propTypes = {
  isPrivate: PropTypes.bool
}

export default MessageItem
