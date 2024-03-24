import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {store} from "./app/store"

function App() {
  return (
    <Provider store={store}>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App