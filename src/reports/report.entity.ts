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

  @Column()
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

  @Column()
  type: string;

  @Column()
  workStream: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
