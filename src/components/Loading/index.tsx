import React from 'react'
import * as C from './styles'
import Lottie from 'react-lottie'
import animationData from '../../animations/loading.json'

export const Loading = () => {
  return (
    <C.Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={300}
        width={300}
      />
    </C.Container>
  )
}
