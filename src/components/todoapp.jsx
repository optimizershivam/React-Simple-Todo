import TodoList from "./todolist"
import {v4 as uuidv4} from "uuid"
import { useState } from "react"
import TodoInput from "./todoinput"

const TodoApp=()=>{
    const [todos,setTodos]=useState([])
    const addTodo=(xyz)=>{
        setTodos([
            ...todos,{
                id:uuidv4(),
                value:xyz,
                ischecked:false,
            },
        ]);
    };

    const deleteTodo=(id)=>{
        console.log("yes")
        setTodos(todos.filter(todo=>todo.id !== id))
    };

    return (
        <div>
            TodoApp
            <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
            <TodoInput addTodo={addTodo}></TodoInput>
        </div>
    )
}

export default TodoApp