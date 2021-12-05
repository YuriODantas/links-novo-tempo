import React from 'react'
import * as C from './style'

type Props = {
  type: string
  icon: string
  handleClick: (type: string) => void
}

export const ButtonFooter = ({ type, icon, handleClick }: Props) => {
  return (
    <C.Container onClick={() => handleClick(type)}>
      <C.Icon src={icon} alt="icone do botão" />
    </C.Container>
  )
}
