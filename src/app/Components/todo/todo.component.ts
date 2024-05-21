import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo[] = [];
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  items: { id: number; active: boolean }[] = [
    { id: 1, active: false },
    { id: 2, active: false },
  ];
  title: string = '';
  desc: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.todo = this.todo.filter((t) => t.id !== todo.id);
    this.deleteTodo.emit(todo);
  }

  OnSubmit() {
    const newTodo: Todo = {
      id: this.todo.length + 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todo.push(newTodo);
    this.title = '';
    this.desc = '';
  }
  btnClick() {
    this.todo.forEach((item) => {
      item.active = !item.active;
    });
  }
}
