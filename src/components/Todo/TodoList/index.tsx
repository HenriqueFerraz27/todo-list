import * as Icon from 'phosphor-react'
import * as S from './styles'
import { useContext } from 'react'
import { TasksContext } from '../../../contexts/TasksContext'

export const TodoList = () => {
  const { tasks, setTasks } = useContext(TasksContext)

  const handleDoneTodo = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    )

    setTasks(updatedTasks)
  }

  return (
    <S.TodoList>
      {tasks.map(task => {
        return (
          <S.ListItem key={task.id}>
            <S.ItemChekbox
              onClick={() => handleDoneTodo(task.id)}
              check={task.done}
            >
              <Icon.Check weight='bold' />
            </S.ItemChekbox>

            <S.ItemContent check={task.done}>{task.content}</S.ItemContent>

            <S.ItemDeleteButton>
              <Icon.Trash />
            </S.ItemDeleteButton>
          </S.ListItem>
        )
      })}
    </S.TodoList>
  )
}
