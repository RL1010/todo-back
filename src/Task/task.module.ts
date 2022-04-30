import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TaskController } from './task.controller';
import { TaskProviders } from './task.providers';
import { TaskService } from './task.service';

  @Module({
    imports: [DatabaseModule],
    controllers: [TaskController],
    providers: [...TaskProviders, TaskService],
  
 
})
export class TaskModule {}
