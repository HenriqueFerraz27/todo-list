import { useContext } from "react"
import { TasksContext } from "../contexts/TasksContext"

export const useTasksContext = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error(
      'useTasksContext must be used within a TasksContextProvider'
    )
  }
  return context
}
