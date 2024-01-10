import * as Icon from 'phosphor-react'
import * as S from './styles'

export const NewTodoForm = () => {
  return (
    <S.NewTodoForm>
      <S.AddNewTodoInput type='text' placeholder='Add a new task...' />

      <S.AddNewTodoButton type='submit'>
        Add
        <Icon.PlusCircle weight='bold' />
      </S.AddNewTodoButton>
    </S.NewTodoForm>
  )
}
