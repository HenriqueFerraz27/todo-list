import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const TodoListMain = styled.main`
  max-width: ${pxToRem(768)};
  width: 86%;
  margin: auto;

  @media (min-width: 768px) {
    width: 76%;
  }

  @media (min-width: 1024px) {
    width: 66%;
  }
`
