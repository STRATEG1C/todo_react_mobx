import React from 'react';
import store from '../store';
import { observer } from 'mobx-react';

const Todo = ({item}) => {
  const onComplete = () => {
    return store.completeTodo(item.id);
  }

  const onResume = () => {
    return store.resumeTodo(item.id);
  }

  const onRemove = () => {
    return store.removeTodo(item.id);
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <p>{item.text}</p>
            <br/>
            <p>{item.complete ? 'Completed' : 'Not completed'}</p>
          </div>
          <div className="card-action">
            {item.complete ? <button onClick={onResume}>Resume</button> : <button onClick={onComplete}>Complete</button>}
            <button onClick={onRemove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Todo);
