import { Routes } from '@angular/router';
import{ Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Task } from './pages/task/task';


export const routes: Routes = [
    {path: ``,
    redirectTo: `login`,
    pathMatch:'full'
    },
    {
        path:`login`,
        component:Login
    },
    {
        path:`register`,
        component:Register
    },
    {
        path:`task`,
        component:Task
    }
];
