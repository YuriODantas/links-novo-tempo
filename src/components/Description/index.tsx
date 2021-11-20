import React from 'react'
import * as C from './style'

export const Description = ({ children }) => {
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {children}
    </C.Container>
  )
}
