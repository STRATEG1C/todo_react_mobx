import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList}) => {
  return (
    <div>
      {todoList.map(item => <Todo item={item} key={item.id} />)}
    </div>
  );
}

export default TodoList;
