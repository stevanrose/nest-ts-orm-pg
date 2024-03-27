import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { DeleteResult, Repository } from 'typeorm';
import { SearchTeamDto } from './dto/search-team-dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = new Team();
    team.name = createTeamDto.name;
    team.description = createTeamDto.description;
    return this.teamRepository.save(team);
  }

  async getCount(): Promise<number> {
    return await this.teamRepository.createQueryBuilder('team').getCount();
  }

  async findAll(skip: number, take: number): Promise<Team[]> {
    return await this.teamRepository.find({
      skip: skip,
      take: take,
      order: {
        name: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<Team> {
    const found = await this.teamRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Team with "${id}" does not exist!`);
    }
    return found;
  }

  async findBySlug(slug: string): Promise<Team> {
    const found = await this.teamRepository.findOneBy({ slug: slug });
    if (!found) {
      throw new NotFoundException(`Team with slug "${slug}" does not exist!`);
    }
    return found;
  }

  async search(searchTeamDto: SearchTeamDto): Promise<Team[]> {
    const { name } = searchTeamDto;
    let qb = this.teamRepository.createQueryBuilder();
    if (name) {
      qb.andWhere('name = :name', { name: name });
    }
    return qb.getMany();
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const { name, description } = updateTeamDto;
    await this.teamRepository.update({ id }, { name, description });
    const found = await this.teamRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Team with id "${id}" does not exist!`);
    }
    return found;
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.teamRepository.delete(id);
  }
}
