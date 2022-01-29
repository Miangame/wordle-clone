import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { media } from '../../theme/media'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
`

export const Key = styled.button`
  width: 40px;
  height: 50px;
  background-color: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  flex: 1 1 0%;
  font-size: 10px;
  padding: 3px;
  cursor: pointer;
  transition: background-color 0.08s ease-in-out;

  ${media.greaterThan('md')`
    font-size: 16px;
    width: 46px;
    height: 56px;
  `}

  &:active {
    background-color: ${colors.grayDark};
  }
`

export const BackspaceImage = styled.img`
  width: 50%;
  height: 50%;
`
