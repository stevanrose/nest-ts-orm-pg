import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoststolenreportService } from './loststolenreport.service';
import { CreateLoststolenreportDto } from './dto/create-loststolenreport.dto';
import { UpdateLoststolenreportDto } from './dto/update-loststolenreport.dto';

@Controller('loststolenreport')
export class LoststolenreportController {
  constructor(private readonly loststolenreportService: LoststolenreportService) {}

  @Post()
  create(@Body() createLoststolenreportDto: CreateLoststolenreportDto) {
    return this.loststolenreportService.create(createLoststolenreportDto);
  }

  @Get()
  findAll() {
    return this.loststolenreportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loststolenreportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoststolenreportDto: UpdateLoststolenreportDto) {
    return this.loststolenreportService.update(+id, updateLoststolenreportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loststolenreportService.remove(+id);
  }
}
