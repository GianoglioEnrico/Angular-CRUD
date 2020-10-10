import { Component, OnInit } from '@angular/core';
import { Todos } from '../../Todos'
import { TodoService } from '../../services/todo.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }
  removeTodo(todo: Todos) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoService.removeTodo(todo).subscribe()
  }

  addTodo(todo: Todos) {
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo))
  }

}
