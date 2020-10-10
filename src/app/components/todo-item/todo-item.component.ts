import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todos } from '../../Todos';
import { TodoService } from "../../services/todo.service"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @Output() removeTodo: EventEmitter<Todos> = new EventEmitter()

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
      "is-complete": this.todo.completed
    }
    return classes
  }
  onToggle(changedTodo: Todos): void {
    changedTodo.completed = !changedTodo.completed
    this.todoService.toggleCompleted(changedTodo).subscribe(todo => console.log(todo))
  }
  deleteTodo(todo) {
    this.removeTodo.emit(todo)
  }

}
