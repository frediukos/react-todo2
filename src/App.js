import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoCreateForm from "./components/TodoCreateForm";


function App() {

  const [todos, setTodos] = useState([{id: 1, name: 'Test', done: false}])

  return (
    <div className="App">
      <TodoCreateForm/>
      <TodoList todo={todos}/>
    </div>
  )
}

export default App;
