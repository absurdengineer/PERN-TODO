import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/header.components';
import ListTodo from './components/TodoContainer/todo-container.components';
import NewTodo from './components/NewTodo/new-todo.components';

function App(){
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8080/api/todos')
          const jsonData = await  response.json()
          console.log(jsonData)
          setTodos(jsonData)
      } catch ({name, message}) {
          console.error(`${name} : ${message}`)
      }
  }
  useEffect(() => { 
    getTodos()
  },[])
  return (
    <div className='container p-5'>
      <Header />
      <NewTodo />
      <ListTodo todos={todos} />
    </div>
    );
}

export default App;
