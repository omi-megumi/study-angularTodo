import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";
import { TodoDestroyComponent } from "./todo-destroy/todo-destroy.component";
import { Task } from "./task";
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoDestroyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Angular_TODO';
  todoList: Task[] = [];
  constructor(private taskService: TaskService) {}

  // TODOリストの一覧表示
  ngOnInit() {
    // console.log('ngOnInitが呼び出されました')
    // 初期サンプルタスクを TaskService に追加
    const initialTask: Task = { id: 1, title: 'task1', exposition: 'sample1', deadline: new Date(), status: 0 };
    this.taskService.addTask(initialTask);
    this.taskService.getTasks().subscribe(task => {
      this.todoList = task;
    });
  }
}
