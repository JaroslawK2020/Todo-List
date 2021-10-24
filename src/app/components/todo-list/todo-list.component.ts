import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(
      // wszystko ok
      (todos: Todo[]) => {
        this.todos = todos;
      },
      // when error
      (error: any) => {
        console.log('Wystąpił błąd',error);
      }
    );
  }

  ngOnInit(): void {
  }

  onDelete(todo: Todo): void{
    this.todoService.deleteTodo(todo).subscribe(
      () => {
        this.todos = this.todos.filter(
          (todoItem: Todo) => {
            return todo.id !== todoItem.id;
          }
        )
      }
    )
  }

  onToggle(todo: Todo): void{
    todo.completed = !todo.completed;

    this.todoService.modifyToggle(todo).subscribe(
      (todoResult:Todo) => {
        this.todos.forEach(
            (todoItem: Todo) => {
              if(todoItem.id === todoResult.id){
                console.log(todoResult)
                todoItem.completed = todoResult.completed;
              }
            }
          )
      }
    );
  }
  onAdd(todo: Todo) : void{
    this.todoService.addTodo(todo).subscribe(
      (todoResult:Todo) => {
        this.todos.push(todoResult);
      }
    );
  }
}
