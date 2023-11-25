import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/Task';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
  tasks: ITask[] = [
    {
      id: 1,
      title: 'Test',
      description: 'Test description',
      done: false,
    },
    {
      id: 2,
      title: 'Test',
      description: 'Test description',
      done: false,
    },
  ];

  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getTasks(): Promise<Task[] | string> {
    const result = await this.taskModel.find().exec();

    if (result.length < 1) return 'No hay tareas para mostrar';

    return this.taskModel.find().exec();
  }

  async getTask(id: string) {
    const result = this.taskModel.findOne({ _id: id });

    if (result === undefined) return 'Tarea no encontrada';

    return result;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  updateTask(id, task) {
    return { id, task };
  }

  async deleteTask(id: string): Promise<Task | string> {
    const deleteTask = await this.taskModel.findByIdAndDelete(id);

    if (deleteTask === null) return 'Tarea no encontrada';

    return deleteTask;
  }
}
