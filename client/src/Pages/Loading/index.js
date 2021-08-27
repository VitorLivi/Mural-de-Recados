import React from 'react'

import LoadingImage from '../../Assets/Animated/Loading.svg'

import { LoadingLayout } from './style'

function Loading () {
  return (
    <LoadingLayout>
      <img src={LoadingImage} />
    </LoadingLayout>
  )
}

export default Loading
