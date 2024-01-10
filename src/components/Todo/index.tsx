import * as Icon from 'phosphor-react'
import * as S from './styles'
import { TodoList } from '..'

export const Todo = () => {
  return (
    <S.Todo>
      <S.TodoHeader>
        <strong>
          Todo Created <span>5</span>
        </strong>

        <strong>
          Completed <span>2 of 5</span>
        </strong>
      </S.TodoHeader>

      <S.TaskListEmpty>
        <Icon.ClipboardText />

        <div>
          <strong>You don't have Todo registered yet</strong>
          <p>Create Todo and organize your to-do items</p>
        </div>
      </S.TaskListEmpty>

      {/* <TodoList /> */}
    </S.Todo>
  )
}
