import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {

  taskObj: any = {};
  lstTasks: any = [];

  addNewTask() {
    this.taskObj.Task = this.taskObj.Task?.trim();

    if (this.taskObj.Task == '' || this.taskObj.Task == undefined) {
      alert("Please Enter a Task");
      return;
    } else {
      this.getTask();
      let taskCount = this.lstTasks.length;
      this.taskObj.Id = taskCount + 1;
      this.taskObj.IsCompleted = false;
      this.lstTasks.push(this.taskObj);
      localStorage.setItem('Tasks', JSON.stringify(this.lstTasks));
      this.taskObj = {};
    }
  }

  getTask() {
    this.lstTasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
  }


}
