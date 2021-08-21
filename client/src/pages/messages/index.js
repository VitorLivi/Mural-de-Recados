import React from 'react'
import Option from '../../components/option'
import Navbar from '../../interfaces/navbar'

import { MessageContainer, MessagesSection, MessagesSectionTitle, Options } from './style'

function Messages () {
  return (
    <div>
      <Navbar/>
      <MessageContainer>
          <MessagesSection>
            <MessagesSectionTitle>
              Nova mensagem
            </MessagesSectionTitle>
            <Options>
              <Option label="PÚBLICA" />
              <Option label="INTERNA" />
            </Options>
          </MessagesSection>
          <MessagesSection>
            <MessagesSectionTitle>
              Mensagens
            </MessagesSectionTitle>
          </MessagesSection>
      </MessageContainer>
    </div>
  )
}

export default Messages
