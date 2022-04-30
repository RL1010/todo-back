import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus{
  COMPLETED = 1,
  UNCOMPLETED = 2,
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  author: string;

  @Column({nullable:false, default: TaskStatus.UNCOMPLETED})
  status: TaskStatus;


}