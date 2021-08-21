import React from 'react'
import MessageItem from './MessageItem'

import { MessageLayout } from './style'

function Messages () {
  return (
    <MessageLayout>
      <MessageItem isPrivate/>
      <MessageItem />
      <MessageItem />
    </MessageLayout>
  )
}

export default Messages
