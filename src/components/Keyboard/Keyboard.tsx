import React from 'react'

import { KEYBOARD_KEYS } from '../../constants/keyboardKeys'
import { Key, Wrapper } from './Keyboard.styled'

const Keyboard = () => {
  return (
    <Wrapper>
      {KEYBOARD_KEYS.map((key) => {
        if (['space', 'del'].includes(key)) {
          return <Key key={key}>{key}</Key>
        }

        return <Key key={key}>{key}</Key>
      })}
    </Wrapper>
  )
}

export default Keyboard
