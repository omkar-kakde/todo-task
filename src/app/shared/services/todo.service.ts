import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // we make a api call to get data
   todoList : Array<string> = ["HTML","CSS","Js","Bootstrap 3"]
  constructor(private _snackbar: SnackbarService) { } 

   getAllTodos(): Array<string>{
    //we make api call to get data
    return this.todoList
   }

   addTodoItem(todo:string){
    // api call to add item in DB
     this.todoList.push(todo)
    this._snackbar.onOpenSnackbar(`${todo} is added in list`)
   }

   removeItem(){
    console.log('Item is remvoed Successfully');
    
   }
}
