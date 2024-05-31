import { Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoAddComponent} from "./todo-add/todo-add.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";
import {TodoDestroyComponent} from "./todo-destroy/todo-destroy.component";

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'edit/:id', component: TodoEditComponent},
  { path: 'destroy/:id', component: TodoDestroyComponent},
];
