import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  businessKey: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  serviceName: string;

  @IsNotEmpty()
  reportId: number;

  @IsNotEmpty()
  userData: string;

  @IsNotEmpty()
  eventData: string;

  tags: string;
}
