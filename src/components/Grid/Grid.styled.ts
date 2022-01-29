import styled from 'styled-components'

import { colors } from '../../theme/colors'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
`

export const GridSquare = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${colors.gray};
`
