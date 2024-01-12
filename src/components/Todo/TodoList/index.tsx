import * as Icon from 'phosphor-react'
import * as S from './styles'
import { useTasksContext } from '../../../hooks/useTasksContext'

export const TodoList = () => {
  const { tasks, setTasks } = useTasksContext()

  const handleDoneTodo = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    )

    setTasks(updatedTasks)
  }

  const handleDeleteTodo = (taskDeleted: number) => {
    const tasksWithoutTheDeleted = tasks.filter(task => {
      return task.id !== taskDeleted
    })

    setTasks(tasksWithoutTheDeleted)
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

            <S.ItemDeleteButton onClick={() => handleDeleteTodo(task.id)}>
              <Icon.Trash />
            </S.ItemDeleteButton>
          </S.ListItem>
        )
      })}
    </S.TodoList>
  )
}
