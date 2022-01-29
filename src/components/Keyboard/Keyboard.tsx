import React from 'react'

import { KEYBOARD_KEYS } from '../../constants/keyboardKeys'
import { BackspaceImage, Key, Row, Wrapper } from './Keyboard.styled'

const Keyboard = () => {
  const { firstRow, secondRow, lastRow } = KEYBOARD_KEYS

  return (
    <Wrapper>
      <Row>
        {firstRow.map((key) => (
          <Key key={key}>{key}</Key>
        ))}
      </Row>
      <Row>
        {secondRow.map((key) => (
          <Key key={key}>{key}</Key>
        ))}
      </Row>
      <Row>
        {lastRow.map((key) => {
          if (key === 'send') {
            return <Key key={key}>Enviar</Key>
          }

          if (key === 'del') {
            return (
              <Key key={key}>
                <BackspaceImage src="/img/delete.png" />{' '}
              </Key>
            )
          }

          return <Key key={key}>{key}</Key>
        })}
      </Row>
    </Wrapper>
  )
}

export default Keyboard
