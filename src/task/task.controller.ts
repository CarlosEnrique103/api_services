import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  list() {
    return this.taskService.index();
  }

  @Post()
  create(@Body() newTask: any) {
    return this.taskService.create(newTask.name, newTask.description);
  }
}
