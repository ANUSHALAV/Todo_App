import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AddTodo } from './add-todo/add-todo';
import { ShowTodo } from './show-todo/show-todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,AddTodo,ShowTodo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo_App');
}
