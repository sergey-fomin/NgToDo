import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }

  toggleDone(idx: number) {
    this.todos.map((task, i) => {
      if (i === idx) task.completed = !task.completed;
      return task;
    });
  }

  deleteTodo(idx: number) {
    this.todos = this.todos.filter((val, i) => i !== idx);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
  }
}
