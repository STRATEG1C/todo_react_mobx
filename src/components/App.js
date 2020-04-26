import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { observer } from 'mobx-react';

const App = observer(({store}) => {
  const todoList = store.todoList;

  return (
    <div className="container">
      <AddTodoForm />
      <TodoList todoList={todoList} />
    </div>
  )
});

export default App;
