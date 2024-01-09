import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${pxToRem(200)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.tertiary};
`
