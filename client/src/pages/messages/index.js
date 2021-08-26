import React, { useState, useEffect as getMessages } from 'react'

import PropTypes from 'prop-types'

import axios from 'axios'
import { useSelector } from 'react-redux'

import { navigation } from './helpers/messageConstants'
import { navigationMapper } from './helpers/messageMappers'

import Button from '../../Components/Button'
import Option from '../../Components/Option'
import Textarea from '../../Components/Textarea'
import MessagesNavigation from '../../Interfaces/MessagesNavigation'
import Message from '../../Interfaces/Message'
import Navbar from '../../Interfaces/Navbar'

import io from 'socket.io-client'

import {
  MessageContainer,
  MessagesSection,
  MessagesSectionTitle,
  Options,
  TextAreaWrapper,
  ButtonWrapper,
  MessagesNavigationWrapper
} from './style'

function Messages (props) {
  const [textArea, setTextArea] = useState('')
  const [messages, setMessages] = useState([])
  const [displayMessages, setDisplayMessages] = useState([])
  const [isPrivate, setIsPrivate] = useState(false)

  const loggedUser = useSelector(state => state.user)

  const getNavigationItems = () => {
    const items = []

    Object.values(navigation).forEach((e) => {
      items.push(navigationMapper[e])
    })

    return items
  }

  function setInitialMessages (messages) {
    setMessages(messages)
  }

  getMessages(() => {
    let finalized = false

    axios.post('http://localhost:5000/message/all', null, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') } })
      .then(res => {
        !finalized && setDisplayMessages(res.data, setInitialMessages(res.data))
      })

    !finalized && io('http://localhost:5000')

    return () => {
      finalized = true
    }
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
    <React.Fragment>
      <Navbar history={props.history}/>
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
              <MessagesNavigation
                setValue={setDisplayMessages}
                value={messages}
                items={getNavigationItems()} />
            </MessagesNavigationWrapper>
            <Message data={displayMessages}/>
          </MessagesSection>
      </MessageContainer>
    </React.Fragment>
  )
}

Messages.propTypes = {
  history: PropTypes.object
}

export default Messages
