import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const NewTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  transform: translateY(-25%);

  input,
  button {
    padding: ${pxToRem(16)};
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

  svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.brand.secondary};
  }
`
