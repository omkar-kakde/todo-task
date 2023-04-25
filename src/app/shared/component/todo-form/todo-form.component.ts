import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private _todoservice:TodoService) { }

  ngOnInit(): void {
  }

  onTodoAdd(item: HTMLInputElement){
    let val = item.value;
    
    if(val.length> 0){
      this._todoservice.addTodoItem(val);
    item.value = '';
    }
  }



}

