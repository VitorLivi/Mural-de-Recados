import React, { useState } from 'react'
import Button from '../../Components/Button'
import Option from '../../Components/Option'
import Textarea from '../../Components/Textarea'
import MessagesNavigation from '../../Interfaces/MessagesNavigation'
import Navbar from '../../Interfaces/Navbar'

import { MessageContainer, MessagesSection, MessagesSectionTitle, Options, TextAreaWrapper, ButtonWrapper, MessagesNavigationWrapper } from './style'

function Messages () {
  const [textArea, setTextArea] = useState('')

  const navigationItems = [
    'TODAS',
    'PÚBLICAS',
    'INTERNAS'
  ]

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
            <TextAreaWrapper>
              <Textarea placeholder='Digite aqui sua mensagem...'
                value={textArea}
                onChange={setTextArea}
                />
            </TextAreaWrapper>
            <ButtonWrapper>
              <Button text='Enviar'/>
            </ButtonWrapper>
          </MessagesSection>
          <MessagesSection>
            <MessagesSectionTitle>
              Mensagens
            </MessagesSectionTitle>
            <MessagesNavigationWrapper>
              <MessagesNavigation items={navigationItems} />
            </MessagesNavigationWrapper>
          </MessagesSection>
      </MessageContainer>
    </div>
  )
}

export default Messages
