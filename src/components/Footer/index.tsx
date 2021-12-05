import React from 'react'
import * as C from './style'

export const Footer = ({ children }) => {
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      {children}
    </C.Container>
  )
}
