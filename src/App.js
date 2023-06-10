import "./App.css";
import TodoForm from './components/Todos/TodoForm.js'
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";
import nextId from "react-id-generator"
function App() {
  const[value,setValue] =useState("")
  const[todos,setTodos]=useState([])

  function onChangeInput(e){
    setValue(e.target.value)
  }
  function deleteTodo(e){

    let index=e.target.parentNode.id
    const copy=[...todos].filter((elem)=> (elem.id!==index))
    setTodos(copy)

  }

  function onClickButton(e){

  setTodos([...todos,{value:value,id:nextId()}])
  }

  return <div className="App">

    <TodoForm value={value} onChangeInput={onChangeInput} onClickButton={onClickButton}/>
    <TodoList todos={todos} deleteTodo={deleteTodo}/>
  </div>;
}

export default App;
