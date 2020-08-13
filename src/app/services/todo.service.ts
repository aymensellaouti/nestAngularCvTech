import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() { }
  loggerTodos() {
    console.log(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
