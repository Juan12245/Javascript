import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Task } from './pages/task/task';

@Component({
  imports: [RouterOutlet, Login, Register, Task, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend-creando.bogota');
}
