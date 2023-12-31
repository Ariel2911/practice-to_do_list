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
import { Task } from '../schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksServices: TasksService) {}

  @Get()
  getTasks(): Promise<Task[] | string> {
    return this.tasksServices.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task | string> {
    return this.tasksServices.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.tasksServices.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id, @Body() task): Promise<Task | string> {
    return this.tasksServices.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): Promise<Task | string> {
    return this.tasksServices.deleteTask(id);
  }
}
