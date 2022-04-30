import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body)
    }
    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks()
    }

    @Get(':id')
    getTaskById(@Param('id') taskId: string) {
        return this.taskService.getTaskById(parseInt(taskId))
    }

    @Patch('edit/:id')
    updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto
    ) {
        return this.taskService.updateTask(parseInt(id), body)
    }

    @Delete('/:id')
    removeTask(@Param('id') taskId: string) {
        return this.taskService.removeTask(parseInt(taskId))
    }

    @Get('/filter/:status')
    getTaskByStatus(@Param('status') status: string){
        return this.taskService.getTaskByStatus(status)
    }



}
