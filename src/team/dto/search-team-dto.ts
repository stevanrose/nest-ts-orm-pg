import { IsNotEmpty } from 'class-validator';

export class SearchTeamDto {
  @IsNotEmpty()
  name: string;
}
