import React, { useState } from 'react';
import store from '../store';

const AddTodoForm = () => {
  const [text, setText] = useState('');

  const onChangeHandler = e => setText(e.target.value);

  const onAddTodoHandler = () => store.addTodo(text);

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="text" type="text" className="validate" value={text} onChange={onChangeHandler} />
              <label htmlFor="first_name">New Todo</label>
          </div>
        </div>
        <p className="waves-effect waves-light btn" onClick={onAddTodoHandler}>Add Todo</p>
      </form>
    </div>
  );
};

export default AddTodoForm;
