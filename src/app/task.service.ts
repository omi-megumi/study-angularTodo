import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from "./task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  private taskIdCount: number = 1;

  getTasks(): Observable<Task[]> {
    return this.taskSubject.asObservable();
  }

  addTask(task: Task):void {
    task.id = this.taskIdCount++; //追加した順でタスクにidを割り当てる
    const updatedTasks = [...this.taskSubject.value, task];
    this.taskSubject.next(updatedTasks);
  }

  updateTask(task: Task): void {
    // 元のタスクのIDと更新するタスクのIDが同じなら、渡されたタスクに置き換える
    const tasks = this.taskSubject.value.map(t => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    this.taskSubject.next(tasks);
  }

  destroyTask(task: Task): void {
    // 削除するタスクを除外した、新しいタスク作成する
    const updatedTasks = this.taskSubject.value.filter(t => t.id !== task.id);
    this.taskSubject.next(updatedTasks);
  }

  searchTask(keyword: string): Observable<Task[]> {
    const tasks = this.taskSubject.value.filter(
      task => task.title.includes(keyword)
    );
    return new BehaviorSubject<Task[]>(tasks).asObservable();
  }
}
