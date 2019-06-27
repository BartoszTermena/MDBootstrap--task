import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: object[];
  todoId: number;

  constructor() { }

  ngOnInit() {
    this.todos = this.getTodos();
    if(this.todos.length == 0) {
      this.todoId = 1
    } else {
      this.todoId = this.todos.length + 1;
    }
  }
  public getTodos(): Object[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }
  addTodo(): void {
    this.todos.push({
      id: this.todoId,
      title: `Task number ${this.todoId}`
    })
    this.setLocalStorageTodos(this.todos)
    this.todoId+=1;
  }
  deleteLastTodo(): void {
    this.todos.pop();
    this.setLocalStorageTodos(this.todos)
    this.todoId-=1;
  }
  clearTodos(): void {
    this.todos = [];
    this.setLocalStorageTodos(this.todos)
    this.todoId = 1;
  }

  private setLocalStorageTodos(todos: Object[]): void {
    localStorage.setItem('todos', JSON.stringify({todos}))
  }
}
