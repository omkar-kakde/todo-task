import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
   todoItems : Array<string> = []
  constructor(private _todoservice : TodoService) { }

  ngOnInit(): void {
    console.log(this._todoservice.getAllTodos());
    this.todoItems = this._todoservice.getAllTodos()
  }

}
