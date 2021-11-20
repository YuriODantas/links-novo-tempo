import React from 'react'
import * as C from './style'

type Props = {
  title: string
  quarta: string
  domingo: string
}

export const Banner = ({ title, quarta, domingo }: Props) => {
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <C.Title>{title}</C.Title>
      <C.Quarta>{quarta}</C.Quarta>
      <C.Domingo>{domingo}</C.Domingo>
    </C.Container>
  )
}
