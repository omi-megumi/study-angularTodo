import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from '@angular/common';
import { TaskService } from "../task.service";
import { Task } from "../task";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-todo-destroy',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CommonModule
  ],
  templateUrl: './todo-destroy.component.html',
  styleUrl: './todo-destroy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDestroyComponent implements OnInit{
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
  destroyItem(){
    // console.log('destroyItemメソッドが呼び出されました');
    if (this.task){
      this.taskService.destroyTask(this.task);
      console.log("タスクを削除しました");
    } else{
      console.error('タスクが削除できません');
    }
  }
}
