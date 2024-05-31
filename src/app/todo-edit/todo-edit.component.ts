import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from "../task";
import { TaskService } from "../task.service";


@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditComponent implements OnInit {
  task: Task | undefined;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParams.get('id'));

    this.taskService.getTasks().subscribe(tasks => {
      this.task = tasks.find(task => task.id === taskIdFromRoute);
      if (!this.task) {
        console.error('タスクが見つかりません');
      }
    });
  }

  updateItem(){
    if (this.task) {
      this.taskService.updateTask(this.task);
    } else {
      console.error('タスクが更新できません');
    }
  }
}
