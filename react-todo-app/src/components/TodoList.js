import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, removeTodo }) => {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                    />
                ))}
            </ul>
        </div>
    )
}


export default TodoList