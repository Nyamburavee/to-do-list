import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    
    function handleChange(e){
        setTodo(e.target.value)
    }
    
    function addTodo(){
        if(todo != ""){
            setTodos([...todos, todo])
        console.log(todo) 
        };
        setTodo("");
       
    };
    
    function deleteTodo(text){
        const newTodos = todos.filter((todo) => {
            return todo != text
        })
        setTodos(newTodos);
    }
    
    
  return (
    <div className="container">
      <h1>To Do List</h1>
           <div className="">
           <input
           name="todo"
           value={todo}
           type="text"
           placeholder="Enter a to do tast"
           onChange={handleChange}
           className="todo-input"
           
            />
            <button className="add-button" onClick={addTodo} >Add</button>
           </div>
           
           { todos.length > 0 ? (
               <ul>
               {
                   todos.map((todo, index) => (
                       <div className="todo-list">
                       <li key={index}>{todo}</li>
                       <button className="delete-button" onClick={() =>{
                           deleteTodo(todo)
                           }}
                           >X</button>
                       </div>
                   ))
               }
               </ul>
           ):(
               <div className="no-task">
               <p>No Task Found</p>
               </div>
           )    
           }  
      
    </div>
  );
}

export default App;
