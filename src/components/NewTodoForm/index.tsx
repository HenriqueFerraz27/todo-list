import * as Icon from 'phosphor-react'
import * as S from './styles'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../../@types/task'
import { useTasksContext } from '../../hooks/useTasksContext'

export const NewTodoForm = () => {
  const { setTasks } = useTasksContext()
  const [newTodoText, setNewTodoText] = useState<string>('')

  const handleNewTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value)
  }

  const handleAddNewTodo = (event: FormEvent) => {
    event.preventDefault()

    const newTodo: Task = {
      id: new Date().getMilliseconds(),
      content: newTodoText,
      done: false,
    }

    setTasks(stateTasks => {
      return [...stateTasks, newTodo]
    })
    setNewTodoText('')
  }

  const inputIsEmpty = newTodoText.length === 0

  return (
    <S.NewTodoForm onSubmit={handleAddNewTodo}>
      <S.AddNewTodoInput
        onChange={handleNewTodoChange}
        type='text'
        placeholder='Add a new task...'
        value={newTodoText}
      />

      <S.AddNewTodoButton type='submit' disabled={inputIsEmpty}>
        Add
        <Icon.PlusCircle weight='bold' />
      </S.AddNewTodoButton>
    </S.NewTodoForm>
  )
}
