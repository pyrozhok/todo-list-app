import React from 'react'
import { TodoForm } from './components/Form'
import { TodoList } from './components/List'
import { TodoResults } from './components/Results'
import './index.scss'

function App() {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
    </div>
  )
}

export default App
