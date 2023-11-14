import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return 'Lista de tareas';
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
