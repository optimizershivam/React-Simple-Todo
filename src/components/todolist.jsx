import React from "react";
import TodoItem from "./todoitem";

const TodoList=({todos,deleteTodo})=>{
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        height: "400px",
        width: "400px",
        margin: "auto",
        overflow: "scroll"
      };
    return(
        <div style={mystyle} >
            <h3>Here is your todo list</h3>
            <ul>
                {todos.map((e)=>(
                    <TodoItem key={e.id} e={e}  deleteTodo={deleteTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList