import React from 'react'
import * as C from './style'

type Props = {
  title: string
  quarta: string
  domingo: string
}

export const Banner = ({ title, quarta, domingo }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Quarta>{quarta}</C.Quarta>
      <C.Domingo>{domingo}</C.Domingo>
    </C.Container>
  )
}
