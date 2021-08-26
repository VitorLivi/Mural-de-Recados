import React from 'react'
import PropTypes from 'prop-types'
import Balloon, { TailOptions } from '../../../Components/Balloon'
import MessageProfile from '../../../Components/MessageProfile'
import Profile from '../../../Assets/Images/avatar-joseph.jpg'

import { useSelector } from 'react-redux'

import { MessageItemLayout } from './style'
import DateHelpers from '../../../Helpers/dateHelpers'

function MessageItem (props) {
  const loggedUser = useSelector(state => state.user)

  function getTailType () {
    const { TAIL_RIGHT, TAIL_LEFT } = TailOptions

    if (props.User === loggedUser?.id?.toString()) {
      return TAIL_RIGHT
    }
    return TAIL_LEFT
  }

  function getInfo () {
    const date = new Date(props.CreateAt)

    return `${date.getDate()} de ${DateHelpers.numberToMonth(date.getMonth())} de ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} - Enviado por ${props.Username}`
  }

  const { Private, Message } = props

  return (
    <MessageItemLayout tail={getTailType()}>
      <MessageProfile image={Profile} name={props.Username} />
      <Balloon isPrivate={Private}
        text={Message}
        info={getInfo()}
        tail={getTailType()}/>
    </MessageItemLayout>
  )
}

MessageItem.propTypes = {
  Private: PropTypes.number,
  User: PropTypes.string,
  Username: PropTypes.string,
  Message: PropTypes.string,
  CreateAt: PropTypes.string
}

export default MessageItem
