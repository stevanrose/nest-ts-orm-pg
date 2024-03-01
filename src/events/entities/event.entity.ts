import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'business-key' })
  businessKey: string;

  @Column()
  name: string;

  @Column({ name: 'user-id' })
  userId: string;

  @Column({ name: 'service-name' })
  serviceName: string;

  @Column({ name: 'report-id' })
  reportId: number;

  @Column('jsonb', { name: 'user-data', nullable: false, default: {} })
  userData: string;

  @Column('jsonb', { name: 'event-data', nullable: false, default: {} })
  eventData: string;

  @Column('jsonb', { name: 'tags', nullable: false, default: {} })
  tags: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
