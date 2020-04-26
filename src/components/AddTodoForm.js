import React, { useState } from 'react';
import TodoList from './TodoList';

const AddTodoForm = ({onAddTodo}) => {
  const [text, setText] = useState('');

  const onChangeHandler = e => setText(e.target.value);

  const onAddTodoHandler = () => onAddTodo(text);

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="text" type="text" className="validate" value={text} onChange={onChangeHandler} />
              <label htmlFor="first_name">New Todo</label>
          </div>
        </div>
        <p className="waves-effect waves-light btn" onClick={onAddTodoHandler}>button</p>
      </form>
    </div>
  );
};

export default AddTodoForm;
