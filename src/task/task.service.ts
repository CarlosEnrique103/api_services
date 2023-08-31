import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  index() {
    return this.tasks;
  }

  show(id: string) {
    return this.tasks.find((el) => el.id === id);
  }

  create(name: string, description: string) {
    const task = {
      id: uuid(),
      name,
      description,
      status: TaskStatus.pending,
    };

    this.tasks.push(task);

    return this.tasks;
  }

  update(id: string, name: string, description: string) {
    const task = this.tasks.find((el) => el.id === id);
    task.name = name;
    task.description = description;
    return task;
  }

  delete(id: string) {
    this.tasks = [...this.tasks.filter((el) => el.id !== id)];
    return this.tasks;
  }
}
