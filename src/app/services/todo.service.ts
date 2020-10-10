import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todos } from '../Todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlTodos: string = "https://jsonplaceholder.typicode.com/todos"
  todosLimit: string = "?_limit=5"
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todos[]> {

    return this.http.get<Todos[]>(`${this.urlTodos}/${this.todosLimit}`)

  }
  toggleCompleted(todo: Todos): Observable<any> {
    const url = `${this.urlTodos}/${todo.id}`
    return this.http.put(url, todo, this.httpOptions)
  }
  removeTodo(todo: Todos): Observable<any> {
    const url = `${this.urlTodos}/${todo.id}`
    return this.http.delete<Todos>(url, this.httpOptions)
  }
  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.urlTodos, todo, this.httpOptions)
  }

}
