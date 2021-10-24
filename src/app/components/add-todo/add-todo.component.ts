import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public addTodoFormGroup: FormGroup;

  @Output()
  public newTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) {
    this.addTodoFormGroup = this.formBuilder.group({
      title:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(!this.addTodoFormGroup.valid){
      console.log(
        this.addTodoFormGroup.get('title')?.errors
      );

      this.snackBar.open('Wrong input!', 'Close');
      return;
    }

    var newTodo: Todo = new Todo();
    newTodo.title = this.addTodoFormGroup.get('title')?.value;
    newTodo.completed = false;
    this.newTodo.emit(newTodo);
  }

}
