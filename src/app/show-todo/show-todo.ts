import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-todo',
  imports: [NgClass],
  templateUrl: './show-todo.html',
  styleUrl: './show-todo.css',
})
export class ShowTodo {
  lstTasks: any = [];

  constructor() {
    this.getTask();
  }

  getTask() {
    this.lstTasks = JSON.parse(localStorage.getItem("Tasks") || '[]');
  }

  onDelete(Id: number) {
    if (Id) {
      this.lstTasks = this.lstTasks.filter((task: any) => {
        return task.Id != Id;
      });
      localStorage.setItem('Tasks', JSON.stringify(this.lstTasks));
    } else {
      alert("Task Id is missing");
    }

  }

  onChecked(event: any, Id: number) {
    if (event.target.checked) {
      this.lstTasks.filter((task: any) => {
        if (task.Id == Id) {
          task.IsCompleted = true;
          localStorage.setItem('Tasks', JSON.stringify(this.lstTasks));
        }
      })
    } else {
      this.lstTasks.filter((task: any) => {
        if (task.Id == Id) {
          task.IsCompleted = false;
          localStorage.setItem('Tasks', JSON.stringify(this.lstTasks));
        }
      })
    }
  }
}
