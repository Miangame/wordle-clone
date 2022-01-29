import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { media } from '../../theme/media'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('md')`
    width: 50%;
  `}
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${colors.gray};
`

export const Title = styled.h1`
  margin: 0;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`
