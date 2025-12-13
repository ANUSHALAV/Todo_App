import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {

  taskObj: any ={};
  lstTasks: any = [];

  addNewTask() {
    this.taskObj.Task = this.taskObj.Task?.trim();

    if (this.taskObj.Task == '' || this.taskObj.Task == undefined) {
      alert("Please Enter a Task");
      return;
    }else{
      alert("Task Added Successfully");
    }
  }


}
