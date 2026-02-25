import { useState } from "react"

export default function ToDoList () {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])    // we wan to store tasks in array

    const AddTodo = (e) => {
        e.preventDefault();

        if (todo.trim()) {                    // to prevent empty tasks we use trim()
            
            const currentTime = new Date().toLocaleTimeString();

            // pehli values ko nahi chherna or next value add kr deni hai 1 new object ma using {}
            setTodos( (prev) => [
                ...prev,
                {text: todo, completed: false, time: currentTime}
            ])
            setTodo("");    // must be empty after

        }
    }
    const DeleteTodo = (indexto) => {
        setTodos( (prev) =>
            // '_'shows value 
            prev.filter((_, index) => index !== indexto)
         );
         
    }

    return (
        <>
        <div className="todo-container">
            <h1>To Do App</h1>
            <form onSubmit={AddTodo}>
                <input 
                type="text" 
                placeholder="Add New Task"
                value={todo}
                onChange={ (e) => setTodo(e.target.value) }            // it is set setter function
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {todos
                .map( (todo, index) => (
                    <li key={index}> 
                    <span> {todo.text} </span>
                    <small> {todo.time} </small>
                    <button onClick={ () => DeleteTodo(index) }> Delete </button>
                    </li>
                ) )}
            </ul>
        </div>
        </>
    )
}