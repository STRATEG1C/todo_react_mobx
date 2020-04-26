import React from 'react';
import Todo from './Todo';
import { observer } from 'mobx-react';

const TodoList = ({todoList}) => {
  return (
    <div>
      {todoList.map(item => <Todo item={item} key={item.id} />)}
    </div>
  );
}

export default observer(TodoList);
