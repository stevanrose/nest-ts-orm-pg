import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { SearchEventDto } from './dto/search-event-dto';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = new Event();
    event.businessKey = createEventDto.businessKey;
    event.name = createEventDto.name;
    event.userId = createEventDto.userId;
    event.serviceName = createEventDto.serviceName;
    event.reportId = createEventDto.reportId;
    event.userData = createEventDto.userData;
    event.eventData = createEventDto.eventData;
    event.tags = createEventDto.tags;
    return await this.eventsRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return await this.eventsRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    const found = await this.eventsRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Event with "${id}" does not exist!`);
    }
    return found;
  }

  async search(SearchEventDto: SearchEventDto): Promise<Event[]> {
    const { businessKey, name, userId, serviceName, reportId } = SearchEventDto;

    let qb = this.eventsRepository.createQueryBuilder();

    if (businessKey) {
      qb.andWhere('"business-key" = :businessKey', {
        businessKey: businessKey,
      });
    }
    if (name) {
      qb.andWhere('"name" = :name', { name: name });
    }
    if (userId) {
      qb.andWhere('"user-id" = :userId', { userId: userId });
    }
    if (serviceName) {
      qb.andWhere('"service-name" = :serviceName', {
        serviceName: serviceName,
      });
    }
    if (reportId) {
      qb.andWhere('"report-id" = :reportId', { reportId: reportId });
    }
    return qb.getMany();
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    const { userId, serviceName, reportId, userData, eventData, tags } =
      updateEventDto;

    await this.eventsRepository.update(
      { id },
      {
        userId,
        serviceName,
        reportId,
        userData,
        eventData,
        tags,
      },
    );

    const found = await this.eventsRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Event with "${id}" does not exist!`);
    }
    return found;
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.eventsRepository.delete(id);
  }
}
