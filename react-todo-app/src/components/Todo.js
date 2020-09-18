import React from "react"
import "./todo.css"
const Todo = ({ todo, removeTodo }) => {

    const handleRemoveClick = () => {
        removeTodo(todo.id);
    }
    return (
        <div className="DIV">
            <ul style={{ fontSize: 25 }}>
                <li>{todo.task}</li>
            </ul>

            <button style={{ color: "white", backgroundColor: "rgba(98, 47, 47, 0.678)", fontSize: 17, marginLeft: 25 }}
                onClick={handleRemoveClick}
                className="remove-btn">Delete </button>

        </div >
    )
}
export default Todo