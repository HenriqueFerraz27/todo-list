import { Header, NewTaskForm } from '../../components'
import * as S from './styles'

function TodoList() {
  return (
    <>
      <Header />
      <S.TodoListMain>
        <NewTaskForm />
      </S.TodoListMain>
    </>
  )
}

export default TodoList
