import React, {useState} from 'react';


const TodoCreateForm = (props) => {

  const [task, setTask] = useState('');

  const addTask = () => {

  };


  return (
    <div>
      TodoCreateForm
      <input type="text" />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TodoCreateForm;
