// import logo from './logo.svg';
import './App.css';
import './App.css';
import TodoApp from './components/todoapp';
import { useState } from 'react';
import Counter from './components/counter';

function App() {
  const[toggle, setToggle]=useState(false)

  return (
    <div className="App">
      <button onClick={()=>setToggle(!toggle)}>
        {toggle ? "show todo app" : "show counter app"}
      </button>
      {toggle ? <Counter/> : <TodoApp/> }
    </div>
  );
}

export default App;

