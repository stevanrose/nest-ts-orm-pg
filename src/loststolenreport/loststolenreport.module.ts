import { Module } from '@nestjs/common';
import { LoststolenreportService } from './loststolenreport.service';
import { LoststolenreportController } from './loststolenreport.controller';

@Module({
  controllers: [LoststolenreportController],
  providers: [LoststolenreportService],
})
export class LoststolenreportModule {}
