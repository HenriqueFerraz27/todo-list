import * as Icon from 'phosphor-react'
import * as S from './styles'

export const NewTaskForm = () => {
  return (
    <S.NewTaskForm>
      <input type='text' placeholder='Add a new task...' />

      <button type='submit'>
        Add
        <Icon.PlusCircle weight='bold' />
      </button>
    </S.NewTaskForm>
  )
}
