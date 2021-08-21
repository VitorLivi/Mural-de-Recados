import React from 'react'
import PropTypes from 'prop-types'

import { MessageProfileLayout, MessageProfileIcon } from './style'

function MessageProfile (props) {
  return (
    <MessageProfileLayout>
      <MessageProfileIcon src={props.image}/>
      <span>{props.name}</span>
    </MessageProfileLayout>
  )
}

MessageProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
}

export default MessageProfile
