import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Todo = styled.article`
  margin-top: ${pxToRem(12)};
`

export const TodoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pxToRem(24)};

  * {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  span {
    margin-left: ${pxToRem(8)};
    padding: ${pxToRem(2)} ${pxToRem(8)};
    font-size: ${({ theme }) => theme.typography.size.xs};
    border-radius: ${pxToRem(100)};
    background-color: ${({ theme }) => theme.color.basic.support.tertiary};
  }
`

export const TaskListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(244)};
  color: ${({ theme }) => theme.color.basic.base.tertiary};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.color.basic.support.tertiary};
  border-radius: ${pxToRem(8)};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};

  svg {
    width: ${pxToRem(56)};
    height: ${pxToRem(56)};
    margin-bottom: ${pxToRem(16)};
  }
`
