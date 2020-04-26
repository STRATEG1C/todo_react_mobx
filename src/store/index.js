import { observable, action, decorate, computed } from 'mobx';

class Store {
  filter = false;

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

  get filteredTodoList() {
    return this.filter ? this.todoList.filter(todo => !todo.complete) : this.todoList;
  }

  onFilter() {
    this.filter = !this.filter;
  }

  addTodo(text) {
    this.todoList.push({
      id: this.todoList.length + 1,
      text,
      complete: false,
    });
  }

  completeTodo(id) {
    this.todoList.find(todo => todo.id === id).complete = true;
  }

  resumeTodo(id) {
    this.todoList.find(todo => todo.id === id).complete = false;
  }

  removeTodo(id) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
}

decorate(Store, {
  todoList: observable,
  filter: observable,
  filteredTodoList: computed,
  completeTodo: action,
  resumeTodo: action,
  removeTodo: action,
  addTodo: action,
  onFilter: action,
});

export default new Store();