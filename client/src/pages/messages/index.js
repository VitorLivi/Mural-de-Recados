import React, { useState, useEffect as getMessages } from 'react'

import axios from 'axios'
import { useSelector } from 'react-redux'

import Button from '../../Components/Button'
import Option from '../../Components/Option'
import Textarea from '../../Components/Textarea'
import MessagesNavigation from '../../Interfaces/MessagesNavigation'
import Message from '../../Interfaces/Message'
import Navbar from '../../Interfaces/Navbar'

import {
  MessageContainer,
  MessagesSection,
  MessagesSectionTitle,
  Options,
  TextAreaWrapper,
  ButtonWrapper,
  MessagesNavigationWrapper
} from './style'

function Messages () {
  const [textArea, setTextArea] = useState('')
  const [messages, setMessages] = useState(null)
  const [isPrivate, setIsPrivate] = useState(false)

  const loggedUser = useSelector(state => state.user)

  const navigationItems = ['TODAS', 'PÚBLICAS', 'INTERNAS']

  getMessages(() => {
    axios.post('http://localhost:5000/message/all', null, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') } })
      .then(res => {
        setMessages(res.data)
      })
  }, [])

  const addNewMessage = () => {
    const params = {
      message: textArea,
      user: loggedUser.id,
      private: isPrivate
    }

    axios.post('http://localhost:5000/message', params,
      { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') } })
  }

  return (
    <>
      <Navbar/>
      <MessageContainer>
          <MessagesSection>
            <MessagesSectionTitle>
              Nova mensagem
            </MessagesSectionTitle>
            <Options>
              <Option label="PÚBLICA" selectEvent={() => setIsPrivate(false)} checked={!isPrivate} />
              <Option label="INTERNA" selectEvent={() => setIsPrivate(true)} checked={isPrivate}/>
            </Options>
            <TextAreaWrapper>
              <Textarea maxLength={255} placeholder='Digite aqui sua mensagem...'
                value={textArea}
                onChange={setTextArea}
              />
            </TextAreaWrapper>
            <ButtonWrapper>
              <Button onClick={ addNewMessage } text='Enviar'/>
            </ButtonWrapper>
          </MessagesSection>
          <MessagesSection>
            <MessagesSectionTitle>Mensagens</MessagesSectionTitle>
            <MessagesNavigationWrapper>
              <MessagesNavigation items={navigationItems} />
            </MessagesNavigationWrapper>
            <Message data={messages}/>
          </MessagesSection>
      </MessageContainer>
    </>
  )
}

export default Messages
