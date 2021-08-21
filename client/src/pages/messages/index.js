import React, { useState } from 'react'
import Button from '../../Components/Button'
import Option from '../../Components/Option'
import Textarea from '../../Components/Textarea'
import Navbar from '../../Interfaces/Navbar'

import { MessageContainer, MessagesSection, MessagesSectionTitle, Options, TextAreaWrapper, ButtonWrapper } from './style'

function Messages () {
  const [textArea, setTextArea] = useState('')

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
              Mensagense
            </MessagesSectionTitle>
          </MessagesSection>
      </MessageContainer>
    </div>
  )
}

export default Messages
