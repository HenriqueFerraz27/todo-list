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

      <TodoList />
    </S.Todo>
  )
}
