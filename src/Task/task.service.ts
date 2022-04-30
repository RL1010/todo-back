import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    constructor(@Inject('TASK_REPOSITORY') private taskRepository: Repository<Task>) { }

    async createTask(body: CreateTaskDto) {
        const task = await this.taskRepository.create(body)
        return await this.taskRepository.save(task)
    }

    async getAllTasks() {
        return this.taskRepository.find()
    }

    async getTaskById(taskId: number): Promise<Task> {
        const existingTask = await this.taskRepository.findOne(taskId)
        if (!existingTask) {
            throw new NotFoundException('Could not find task')
        }
        return existingTask
    }
    async updateTask(taskId: number, updateBody: UpdateTaskDto): Promise<UpdateResult> {
        const task = await this.taskRepository.findOne(taskId)
        console.log(task);
        if (!task) {
            throw new NotFoundException(`The task does not exists`)
        }
        return await this.taskRepository.update(taskId, updateBody)
    }

    async removeTask(taskId: number): Promise<Task>{
        const task = await this.taskRepository.findOne(taskId)
        if (!task) {
            throw new NotFoundException(`The task does not exists`)
        }
                const removedItem = this.taskRepository.remove(task)
        return removedItem
    }

    async getTaskByStatus(status: string){
        const task = await this.taskRepository.find({where:{status: status}})
        if(status === '0'){
            return this.taskRepository.find()
        }
        return task
    }
}
