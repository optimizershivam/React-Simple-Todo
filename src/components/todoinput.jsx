import React, { useState } from "react";
import styles from "./todoinput.module.css"

const TodoInput=({addTodo})=>{
    const [value,setValue]=useState("")
    return(
        <div>
            <input className={styles.field} type="text"
            value={value}
            placeholder="new todo item"
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            ></input>
            
            <button disabled={!value}
            onClick={()=>{
                addTodo(value)
                setValue("")
            }}
            >➕</button>
        </div>
    )

}

export default TodoInput