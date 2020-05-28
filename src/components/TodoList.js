import React from 'react';


const TodoList = (props) => {

  return (
    <div>

      list

      {
        props.todos.map(el => <li>{el.name}</li>)
      }
    </div>
  );
};

export default TodoList;
