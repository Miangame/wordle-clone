import React from 'react'

import { GRID_ROWS } from '../../constants/grid'
import { WORD_LENGTH } from '../../constants/words'
import { GridSquare, Wrapper } from './Grid.styled'

const GRID_SIZE = GRID_ROWS * WORD_LENGTH

const Grid = () => {
  const grid = Array(GRID_SIZE).fill(null)

  return (
    <Wrapper>
      {grid.map((_, index) => (
        <GridSquare key={index} className="grid-item" />
      ))}
    </Wrapper>
  )
}

export default Grid
