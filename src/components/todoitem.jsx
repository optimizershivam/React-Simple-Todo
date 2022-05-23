import React, { useState } from "react";
import styles from "./todoitem.module.css"

const TodoItem =({e,deleteTodo})=>{
    const[ischecked,setchecked] = useState(e.ischecked)
    return(
       
       <div className={styles.dis}>
           <div>

           <input type="checkbox" checked={ischecked} onChange={(e)=>{setchecked(e.target.checked)}}></input>
         <h3 className={ischecked?styles.strike:styles.strike1}> {e.value}</h3>
           </div>
            <button onClick={()=>deleteTodo(e.id)}>❌</button>
     </div>
     
    )
}

export default TodoItem