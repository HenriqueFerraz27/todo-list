import { ReactNode, createContext, useEffect, useState } from 'react'

export interface Task {
  id: number
  content: string
  done: boolean
}

interface TasksContextData {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TasksContext = createContext({} as TasksContextData)

interface TasksContextProviderProps {
  children: ReactNode
}

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const storedStateAsJSON = localStorage.getItem('@todo-list:tasks-state-1.0.0')

  const [tasks, setTasks] = useState<Task[]>(
    storedStateAsJSON ? JSON.parse(storedStateAsJSON) : []
  )

  useEffect(() => {
    localStorage.setItem('@todo-list:tasks-state-1.0.0', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
