import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes'
import TodoList from './pages/TodoList'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TodoList />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
