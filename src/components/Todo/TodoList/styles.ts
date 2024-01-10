import styled from 'styled-components'
import { pxToRem } from '../../../utils/pxToRem'

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`

interface ListItemProps {
  check?: boolean
}

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${pxToRem(12)};
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.primary};
`

export const ItemChekbox = styled.button<ListItemProps>`
  min-width: ${pxToRem(26)};
  height: ${pxToRem(26)};

  svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    color: ${({ theme, check }) =>
      check ? theme.color.basic.auxiliary.primary : 'transparent'};
    border: 2px solid ${({ theme }) => theme.color.brand.primary};
    border-radius: 100%;
    background-color: ${({ theme, check }) =>
      check && theme.color.brand.primary};
    transition: all 0.1s;

    &:hover {
      color: ${({ theme, check }) =>
        check && theme.color.basic.auxiliary.primary};
      background-color: ${({ theme, check }) => {
        if (check) return theme.color.brand.secondary
        if (!check) return 'rgba(196, 196, 204, 20%)'
      }};
      border-color: ${({ theme, check }) =>
        check && theme.color.brand.secondary};
    }
  }
`

export const ItemContent = styled.p<ListItemProps>`
  color: ${({ theme, check }) => check && theme.color.basic.base.tertiary};
  text-decoration: ${({ check }) => check && 'line-through'};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
`

export const ItemDeleteButton = styled.button`
  min-width: ${pxToRem(26)};
  height: ${pxToRem(26)};
  border-radius: ${pxToRem(6)};

  svg {
    color: ${({ theme }) => theme.color.brand.primary};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.basic.support.tertiary};

    svg {
      color: ${({ theme }) => theme.color.action.delete};
    }
  }
`
