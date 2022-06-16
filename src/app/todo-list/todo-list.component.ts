import { Component, OnInit } from '@angular/core';
import { ITodo } from './todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: ITodo[] = [];
  newTodo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.newTodo) {
      this.todoList.push({
        text: this.newTodo,
        isComplete: false
      });
      this.newTodo = '';
    } else {
      alert('Please enter a task.')
    }
  }

}
