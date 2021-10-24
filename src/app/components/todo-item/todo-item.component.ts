import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'add-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  @Input()
  public todo!: Todo;

  @Output()
  public deleteTodo: EventEmitter<Todo> = new EventEmitter();

  @Output()
  public toggleTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  public setClass() : string {
    var myClass: string = '';

    if(this.todo.completed)
      myClass = 'is-completed';
  
    return myClass;
  }

  public onToggle(todo: Todo): void{
    this.toggleTodo.emit(todo)
  }
}
