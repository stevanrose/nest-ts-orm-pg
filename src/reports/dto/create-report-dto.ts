import { IsNotEmpty, IsIn, IsDateString } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  reference: string;

  @IsNotEmpty()
  businessKey: string;

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
  reportType: string;

  @IsIn(['Central', 'TP'])
  workStream: string;

  @IsNotEmpty()
  metaData: string;

  @IsNotEmpty()
  reportData: string;
}
