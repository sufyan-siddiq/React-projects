import React, { useState, useEffect } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./App.css"

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)

    }
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (

    <div className="main-div">
      <h1>Todo App</h1>

      <TodoForm id="input-style"
        addTodo={addTodo} />
      <hr />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
      />
    </div>
  )
}



export default App