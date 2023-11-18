import { Injectable } from '@nestjs/common';
import { Task } from '../interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
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

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id) {
    return id;
  }

  createTask(task) {
    return task;
  }

  updateTask(id, task) {
    return { id, task };
  }

  deleteTask(id) {
    return id;
  }
}
