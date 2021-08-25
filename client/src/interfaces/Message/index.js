import React from 'react'
import MessageItem from './MessageItem'
import PropTypes from 'prop-types'

import { MessageLayout } from './style'

function Message ({ data }) {
  function getMessageItems () {
    if (data) {
      return (
        <React.Fragment>
          {data.map(e => <MessageItem key={e.ID} {...e} />)}
        </React.Fragment>
      )
    }
    return null
  }

  return (
    <MessageLayout>
      {getMessageItems()}
    </MessageLayout>
  )
}

Message.propTypes = {
  data: PropTypes.any
}

export default Message
