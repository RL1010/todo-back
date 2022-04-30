import { TaskStatus } from "../task.entity";

export class UpdateTaskDto{

    title: string;
    author: string;
    status: TaskStatus;
    

}