export interface Task {
  id: number;
  title: string;
  exposition: string;
  deadline: Date;
  status: number; //0が未完了、1が完了
}
