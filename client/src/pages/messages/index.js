import React from 'react'
import Navbar from '../../interfaces/navbar'

import { MessageContainer, NewMessageSection, MessagesSection } from './style'

function Messages () {
  return (
    <div>
      <Navbar/>
      <MessageContainer>
          <NewMessageSection>

          </NewMessageSection>
          <MessagesSection>

          </MessagesSection>
      </MessageContainer>
    </div>
  )
}

export default Messages
