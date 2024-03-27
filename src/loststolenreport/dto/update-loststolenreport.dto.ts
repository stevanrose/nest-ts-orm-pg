import { PartialType } from '@nestjs/swagger';
import { CreateLoststolenreportDto } from './create-loststolenreport.dto';

export class UpdateLoststolenreportDto extends PartialType(CreateLoststolenreportDto) {}
