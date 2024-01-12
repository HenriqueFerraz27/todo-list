import { ThemeProvider } from 'styled-components'
import TodoList from './pages/TodoList'
import { GlobalStyle, darkTheme } from './styles'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TodoList />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
