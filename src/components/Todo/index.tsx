import * as Icon from 'phosphor-react'
import * as S from './styles'
import { TodoList } from '..'
import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'

export const Todo = () => {
  const { tasks } = useContext(TasksContext)
  const numberOfTasksDone = tasks.filter(task => task.done === true).length

  return (
    <S.Todo>
      <S.TodoHeader>
        <strong>
          Tasks Created <span>{tasks.length}</span>
        </strong>

        <strong>
          Completeds{' '}
          <span>
            {numberOfTasksDone} of {tasks.length}
          </span>
        </strong>
      </S.TodoHeader>

      {tasks.length === 0 && (
        <S.TaskListEmpty>
          <Icon.ClipboardText />

          <div>
            <strong>You don't have Todo registered yet</strong>
            <p>Create Todo and organize your to-do items</p>
          </div>
        </S.TaskListEmpty>
      )}

      {tasks.length !== 0 && <TodoList />}
    </S.Todo>
  )
}
