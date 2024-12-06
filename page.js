
'use client'
import Image from "next/image";
import React,{useState} from "react";

export default function Home() {
  const [todos , setTodos] = useState([])
  const [newTodo , setNewTodo] = useState("")
  const onInputChangeHandler= (todo)=>{
    setNewTodo(todo);

  }
  const onSubmitHandler = ()=> {
    if (!newTodo) {
      alert("Enter a todo")
      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    }
    let newArray= todos;
    let newTodosObject = {id:todos.length+1 , title:newTodo}
    newArray.push(newTodosObject)
    setTodos([...newArray])
    setNewTodo("")
  }
  return (
    <div className="bg-red-500 min-h-[100vh] h-fit-content flex justify-center items-center">

      <div className="bg-slate-300 min-h-300px h-[50vh] w-[70vw] min-w-[200px]">
      <h1>TODO LIST</h1>

      {/* input section */}
      <div>
        <input value={newTodo} type="text" placeholder="enter todo" onChange={(e)=>{onInputChangeHandler(e.target.value)}} /> 
        <button onClick={()=>{onSubmitHandler()}} className="bg-red-800 text-white" >Add todo</button>
      </div>
      {/* list of todos using map */}
      <div>
        {todos.map((todo,index)=>{
          return (
          <div key={todo.id}> <h1 >{todo.title}</h1></div>
          )
          })}
          
      </div>

      </div>

    </div>
  );
}
