import { IsNotEmpty, IsIn, IsDateString } from 'class-validator';

export class UpdateReportDto {
  @IsNotEmpty()
  forenames: string;

  @IsNotEmpty()
  surname: string;

  @IsDateString()
  dateOfBirth: Date;

  @IsNotEmpty()
  countryOfLoss: string;

  @IsIn(['ready', 'in-progress', 'complete'])
  status: string;

  @IsIn(['Adult', 'Child', 'Third-Party'])
  type: string;

  @IsIn(['Central', 'TP'])
  workStream: string;
}
