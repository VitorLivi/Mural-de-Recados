import React from 'react'
import PropTypes from 'prop-types'

import IconChat from '../../Assets/Icons/icon-chat.svg'

import { BalloonLayout, RightTail, LeftTail, BalloonInfo, BallonInfoIcon } from './style'

export const TailOptions = {
  TAIL_LEFT: 'TAIL_LEFT',
  TAIL_RIGHT: 'TAIL_RIGHT'
}

function Balloon (props) {
  function getInfo () {
    if (props.info) {
      return (
        <BalloonInfo>
          <BallonInfoIcon src={IconChat} />
          <span>{props.info}</span>
        </BalloonInfo>
      )
    }
  }

  function getTail () {
    const { TAIL_LEFT, TAIL_RIGHT } = TailOptions
    const { isPrivate, tail } = props

    switch (tail) {
      case TAIL_LEFT:
        return <LeftTail isPrivate={Boolean(isPrivate)}/>
      case TAIL_RIGHT:
        return <RightTail isPrivate={Boolean(isPrivate)}/>
      default:
        return null
    }
  }

  const { text, isPrivate } = props

  return (
    <BalloonLayout isPrivate={Boolean(isPrivate)}>
      {getTail()}
      <p>{text}</p>
      {getInfo()}
    </BalloonLayout>
  )
}

Balloon.propTypes = {
  text: PropTypes.string,
  info: PropTypes.string,
  isPrivate: PropTypes.number,
  tail: PropTypes.oneOf(Object.values(TailOptions))
}

export default Balloon
