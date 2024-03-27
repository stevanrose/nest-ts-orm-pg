import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateReportDto } from './dto/create-report-dto';
import { UpdateReportDto } from './dto/update-report-dto';
import { Report } from './report.entity';
import { ReportsService } from './reports.service';
import { SearchReportDto } from './dto/search-report-dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  create(@Body() createReportDto: CreateReportDto): Promise<Report> {
    return this.reportsService.create(createReportDto);
  }

  @Get('count')
  getCount(): Promise<number> {
    return this.reportsService.getCount();
  }

  @Get()
  findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('take', new DefaultValuePipe(25), ParseIntPipe) take: number,
  ): Promise<Report[]> {
    console.log(`Finding all with skip: ${skip}, take: ${take}`);
    return this.reportsService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Report> {
    return this.reportsService.findOne(id);
  }

  @Post('search')
  search(@Body() searchReportDto: SearchReportDto): Promise<Report[]> {
    return this.reportsService.search(searchReportDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReportDto: UpdateReportDto,
  ): Promise<Report> {
    return this.reportsService.update(id, updateReportDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.reportsService.delete(id);
  }
}
