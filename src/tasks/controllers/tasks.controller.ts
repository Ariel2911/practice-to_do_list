import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksServices: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksServices.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id) {
    return this.tasksServices.getTask(id);
  }

  @Post()
  createTask(@Body() task) {
    return this.tasksServices.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id, @Body() task) {
    return this.tasksServices.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id) {
    return this.tasksServices.deleteTask(id);
  }
}
