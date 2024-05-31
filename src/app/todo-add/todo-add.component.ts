import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {
  title: string = '';
  exposition:string = '';
  deadline: string = '';
  status: number = 0;

  constructor(private taskService: TaskService) {}
  addNewItem() {
    // console.log('addNewItemメソッドが呼び出されました');
    // console.log('説明:', this.exposition);
    const deadlineDate = new Date(this.deadline);
    //idを0で仮置き
    const newTask = {id: 0, title: this.title, exposition: this.exposition, deadline: deadlineDate, status: this.status};

    this.taskService.addTask(newTask);
    this.title = '';
    this.exposition = '';
    this.deadline = '';
  }
}
