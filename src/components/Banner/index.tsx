import React from 'react'
import * as C from './style'

type Props = {
  title: string
  primeiroDia: string
  segundoDia: string
}

export const Banner = ({ title, primeiroDia, segundoDia }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.PrimeiroDia>{primeiroDia}</C.PrimeiroDia>
      <C.SegundoDia>{segundoDia}</C.SegundoDia>
    </C.Container>
  )
}
