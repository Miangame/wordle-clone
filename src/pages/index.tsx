import React, { useEffect, useState } from 'react'

import Grid from '../components/Grid/Grid'
import Keyboard from '../components/Keyboard/Keyboard'
import {
  Body,
  Header,
  Main,
  Title,
  Wrapper
} from '../components/pages/home.styled'
import { SECRET_KEY } from '../constants/localStorage'
import WordsService from '../services/WordsService'

const Home = () => {
  const [word, setWord] = useState('')

  useEffect(() => {
    setWord(localStorage.getItem(SECRET_KEY) || WordsService.getRandomWord())
  }, [])

  useEffect(() => {
    if (!localStorage.getItem(SECRET_KEY)) {
      localStorage.setItem(SECRET_KEY, word)
    }
  }, [word])

  return (
    <Wrapper>
      <Body>
        <Header>
          <Title>Wordle - Clone</Title>
        </Header>

        <Main>
          <Grid />
        </Main>

        <Keyboard />
      </Body>
    </Wrapper>
  )
}

export default Home
