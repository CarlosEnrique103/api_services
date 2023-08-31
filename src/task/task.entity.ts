export enum TaskStatus {
  pending = 'Pending',
  doing = 'Doing',
  completed = 'Completed',
}

export class Task {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
}
