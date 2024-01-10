import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const NewTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  transform: translateY(-25%);

  input,
  button {
    min-height: ${pxToRem(52)};
    padding: 0 ${pxToRem(16)};
    border-radius: ${pxToRem(8)};
    transition: all 0.1s;
  }

  @media (min-width: 425px) {
    flex-direction: row;
    transform: translateY(-50%);
  }
`

export const AddNewTodoInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.color.basic.base.primary};
  background-color: ${({ theme }) => theme.color.basic.auxiliary.primary};
  border: none;

  &:hover {
    outline: 2px solid #996dff;
  }
`

export const AddNewTodoButton = styled.button`
  gap: ${pxToRem(8)};
  color: ${({ theme }) => theme.color.basic.auxiliary.tertiary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  background-color: ${({ theme }) => theme.color.brand.primary};
  border: 2px solid ${({ theme }) => theme.color.brand.primary};
  transition: all 0.1s;

  svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.color.brand.primary};
    background-color: transparent;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.brand.secondary};
    cursor: not-allowed;
  }
`
