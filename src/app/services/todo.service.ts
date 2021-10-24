import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../components/models/Todo';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  private todosLimit: string = '?_limit=5';

  todos: Todo[] = [];

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`, HTTP_OPTIONS);
  }

  public deleteTodo(todo: Todo): Observable<any>{
    return this.httpClient.delete<any>(
      `${this.todosUrl}/${todo.id}`,
      HTTP_OPTIONS
    )
  }

  public modifyToggle(todo: Todo): Observable<Todo>{
    return this.httpClient.put<Todo>(
      `${this.todosUrl}/${todo.id}`,
      todo,
      HTTP_OPTIONS
    );
  }

  public addTodo(todo: Todo): Observable<Todo>{
    return this.httpClient.post<Todo>(
      this.todosUrl,
      todo,
      HTTP_OPTIONS
    );
  }
}
