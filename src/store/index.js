import { observable, action, decorate } from 'mobx';

class Store {
  todoList = [
    {
      id: 1,
      text: 'Learn MobX',
      complete: false
    },
    {
      id: 2,
      text: 'Create todo with MobX',
      complete: false
    }
  ];

  completeTodo(id) {
    this.todoList.find(todo => todo.id === id).complete = true;
  }

  resumeTodo(id) {
    this.todoList.find(todo => todo.id === id).complete = false;
  }
}

decorate(Store, {
  todoList: observable,
  getTodoList: action.bound,
  completeTodo: action
});

export default new Store();