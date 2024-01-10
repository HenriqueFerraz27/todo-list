import { Header, NewTodoForm, Todo } from '../../components'
import * as S from './styles'
import { TasksContextProvider } from '../../contexts/TasksContext'

function TodoList() {
  return (
    <>
      <Header />
      <S.TodoListMain>
        <TasksContextProvider>
          <NewTodoForm />
          <Todo />
        </TasksContextProvider>
      </S.TodoListMain>
    </>
  )
}

export default TodoList
