import { Header, NewTodoForm, Todo } from '../../components'
import * as S from './styles'

function TodoList() {
  return (
    <>
      <Header />
      <S.TodoListMain>
        <NewTodoForm />
        <Todo />
      </S.TodoListMain>
    </>
  )
}

export default TodoList
