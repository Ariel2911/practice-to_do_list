import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getTasks(): Promise<Task[] | string> {
    const result = await this.taskModel.find().exec();

    if (result.length < 1) return 'No hay tareas para mostrar';

    return this.taskModel.find().exec();
  }

  async getTask(id: string): Promise<Task | string> {
    const result = await this.taskModel.findOne({ _id: id });

    if (result === undefined) return 'Tarea no encontrada';

    return result;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);

    return await createdTask.save();
  }

  async updateTask(id: string, task: Task): Promise<Task | string> {
    try {
      const updatedTask = await this.taskModel.findByIdAndUpdate(id, task);

      return updatedTask;
    } catch (error) {
      return 'Tarea no encontrada';
    }
  }

  async deleteTask(id: string): Promise<Task | string> {
    const deleteTask = await this.taskModel.findByIdAndDelete(id);

    if (deleteTask === null) return 'Tarea no encontrada';

    return deleteTask;
  }
}
