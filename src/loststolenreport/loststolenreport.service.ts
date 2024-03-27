import { Injectable } from '@nestjs/common';
import { CreateLoststolenreportDto } from './dto/create-loststolenreport.dto';
import { UpdateLoststolenreportDto } from './dto/update-loststolenreport.dto';

@Injectable()
export class LoststolenreportService {
  create(createLoststolenreportDto: CreateLoststolenreportDto) {
    return 'This action adds a new loststolenreport';
  }

  findAll() {
    return `This action returns all loststolenreport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loststolenreport`;
  }

  update(id: number, updateLoststolenreportDto: UpdateLoststolenreportDto) {
    return `This action updates a #${id} loststolenreport`;
  }

  remove(id: number) {
    return `This action removes a #${id} loststolenreport`;
  }
}
