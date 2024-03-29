import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report-dto';
import { UpdateReportDto } from './dto/update-report-dto';
import { Report } from './report.entity';
import { SearchReportDto } from './dto/search-report-dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = new Report();
    report.reference = createReportDto.reference;
    report.businessKey = createReportDto.businessKey;
    report.forenames = createReportDto.forenames;
    report.surname = createReportDto.surname;
    report.dateOfBirth = createReportDto.dateOfBirth;
    report.countryOfLoss = createReportDto.countryOfLoss;
    report.status = createReportDto.status;
    report.reportType = createReportDto.reportType;
    report.workStream = createReportDto.workStream;
    report.metaData = createReportDto.metaData;
    report.reportData = createReportDto.reportData;
    return this.reportRepository.save(report);
  }

  async getCount(): Promise<number> {
    return await this.reportRepository.createQueryBuilder('report').getCount();
  }

  async findAll(skip: number, take: number): Promise<Report[]> {
    return await this.reportRepository.find({
      skip: skip,
      take: take,
      order: {
        createdDate: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Report> {
    const found = await this.reportRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Report with "${id}" does not exist!`);
    }
    return found;
  }

  async search(searchReportDto: SearchReportDto): Promise<Report[]> {
    const {
      reference,
      businessKey,
      forenames,
      surname,
      dateOfBirth,
      countryOfLoss,
      status,
      reportType,
      workStream,
    } = searchReportDto;

    let qb = this.reportRepository.createQueryBuilder();
    if (reference) {
      qb.andWhere('reference = :reference', { reference: reference });
    }
    if (businessKey) {
      qb.andWhere('"businessKey" = :businessKey', { businessKey: businessKey });
    }
    if (forenames) {
      qb.andWhere('forenames = :forenames', { forenames: forenames });
    }
    if (surname) {
      qb.andWhere('surname = :surname', { surname: surname });
    }
    if (dateOfBirth) {
      qb.andWhere('dateOfBirth = :dateOfBirth', { dateOfBirth: dateOfBirth });
    }
    if (countryOfLoss) {
      qb.andWhere('countryOfLoss = :countryOfLoss', {
        countryOfLoss: countryOfLoss,
      });
    }
    if (status) {
      qb.andWhere('status = :status', {
        status: status,
      });
    }
    if (workStream) {
      qb.andWhere('workStream = :workStream', {
        workStream: workStream,
      });
    }
    if (reportType) {
      qb.andWhere('reportType = :reportType', {
        reportType: reportType,
      });
    }
    return qb.getMany();
  }

  async update(id: number, updateReportDto: UpdateReportDto): Promise<Report> {
    const {
      forenames,
      surname,
      dateOfBirth,
      countryOfLoss,
      status,
      reportType,
      workStream,
      metaData,
      reportData,
    } = updateReportDto;

    await this.reportRepository.update(
      { id },
      {
        forenames,
        surname,
        dateOfBirth,
        countryOfLoss,
        status,
        reportType,
        workStream,
        metaData,
        reportData,
      },
    );
    const found = await this.reportRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Report with "${id}" does not exist!`);
    }
    return found;
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.reportRepository.delete(id);
  }
}
