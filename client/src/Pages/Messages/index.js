import React, { useState, useEffect, useRef } from 'react'

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

  const socketRef = useRef(null)
  const loggedUser = useSelector(state => state.user)

  const API_URL = window.env.API_URL

  useEffect(() => {
    initializeSocket()
    socketListeners()
    getAllMessages()

    return () => {
      closeSocket()
    }
  }, [])

  const getNavigationItems = () => {
    const items = []

    Object.values(navigation).forEach((e) => {
      items.push(navigationMapper[e])
    })

    return items
  }

  const addNewMessage = () => {
    const { current: socket } = socketRef

    const params = {
      message: textArea,
      user: loggedUser.id,
      private: isPrivate
    }

    axios.post(API_URL + '/message', params,
      { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') } })
      .then(res => {
        socket && socket.emit('sendMessage', res.data)
        updateMessages(res.data)
      })
  }

  function getAllMessages () {
    axios.post(API_URL + '/message/all', null,
      { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') } })
      .then(res => {
        setDisplayMessages(res.data)
        setMessages(res.data)
      })
  }

  function initializeSocket () {
    if (!socketRef.current) {
      socketRef.current = io(API_URL)
    }
  }

  function closeSocket () {
    const { current: socket } = socketRef

    if (socket) {
      socket.close()
      socket.disconnect()
      socketRef.current = null
    }
  }

  function socketListeners () {
    const { current: socket } = socketRef

    socket.on('receivedMessage', function (newMessage) {
      updateMessages(newMessage)
    })
  }

  function updateMessages (value) {
    setMessages(prev => [value, ...prev])
    setDisplayMessages(prev => [value, ...prev])
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
              <Textarea
                placeHolder='Digite aqui sua mensagem...'
                maxLength={255}
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
