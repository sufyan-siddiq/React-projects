import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./todoform.css"

const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false


    })
    const handleTextInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
            setTodo({ ...todo, task: "" })
        }
    }
    return (
        <div className="input-div" >
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Add todo.."
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTextInputChange} />
                <button className="btn" type="submit">Add Todo</button>
            </form>
        </div >
    )
}
export default TodoForm