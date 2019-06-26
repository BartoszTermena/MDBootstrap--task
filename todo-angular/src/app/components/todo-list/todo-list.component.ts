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
    this.todoId = 1;
    this.todos = [];
  }
  addTodo(): void {
    this.todos.push({
      id: this.todoId,
      title: `Task number ${this.todoId}`
    })
    this.todoId+=1;
  }
  deleteLastTodo(): void {
    this.todos.pop();
    this.todoId-=1;
  }
  clearTodos(): void {
    this.todos = [];
    this.todoId = 1;
  }
}
