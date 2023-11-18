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
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from '../interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksServices: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksServices.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id) {
    return this.tasksServices.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
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
