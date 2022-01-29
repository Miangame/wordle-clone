import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { media } from '../../theme/media'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
`

export const GridSquare = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.gray};

  ${media.greaterThan('md')`
    width: 60px;
    height: 60px;
  `}
`
