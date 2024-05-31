import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { TodoListComponent } from './app/todo-list/todo-list.component';
import {TodoAddComponent} from "./app/todo-add/todo-add.component";
import { TodoEditComponent } from './app/todo-edit/todo-edit.component';
import {TodoDestroyComponent} from "./app/todo-destroy/todo-destroy.component";

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'edit/:id', component: TodoEditComponent },
  { path: 'destroy/:id', component: TodoDestroyComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule),
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
