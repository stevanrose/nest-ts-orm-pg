import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reference: string;

  @Column({ name: 'business-key' })
  businessKey: string;

  @Column()
  forenames: string;

  @Column()
  surname: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  countryOfLoss: string;

  @Column()
  status: string;

  @Column({ name: 'report-type' })
  reportType: string;

  @Column({ name: 'work-stream' })
  workStream: string;

  @Column('jsonb', { name: 'meta-data', nullable: false, default: {} })
  metaData: string;

  @Column('jsonb', { name: 'report-data', nullable: false, default: {} })
  reportData: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
