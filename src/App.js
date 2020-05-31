import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoCreateForm from "./components/TodoCreateForm";

const initialTodos = [
  {id: 1, name: 'ToDo 1', done: false},
  {id: 1, name: 'ToDo 1', done: false},
  {id: 1, name: 'ToDo 1', done: false},
];

function App() {

  const [todos, setTodos] = useState(initialTodos);


  return (
    <div className="App">
      <TodoCreateForm/>
      <TodoList todos={todos} />

    </div>
  )
}

export default App;
