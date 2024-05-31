import { ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoAddComponent, CommonModule, RouterModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent implements OnInit {
  // @Input() todoList?: Task[];
  todoList$: Observable<Task[]>;
  searchKeyword: string = '';
  filteredTodoList: Task[] = [];

  constructor(private taskService: TaskService) {
    this.todoList$ = this.taskService.getTasks();
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.filteredTodoList = tasks; // 初期表示を設定
    });
  }

  onSearch() {
    console.log("検索メソッドが呼び出されました")
    if (this.searchKeyword.trim() === '') {
      this.taskService.getTasks().subscribe(tasks => {
        this.filteredTodoList = tasks;
      });
    } else {
      this.taskService.searchTask(this.searchKeyword).subscribe(tasks => {
        this.filteredTodoList = tasks;
      });
    }
  }
}
