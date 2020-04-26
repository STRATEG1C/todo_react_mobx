import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { observer } from 'mobx-react';

const App = ({store}) => {
  const todoList = store.filteredTodoList;

  return (
    <div className="container">
      <AddTodoForm />
      <button className="waves-effect waves-light btn" onClick={() => store.onFilter()}>Only Not Completed</button>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default observer(App);
