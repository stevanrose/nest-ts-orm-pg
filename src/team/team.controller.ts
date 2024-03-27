import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { SearchTeamDto } from './dto/search-team-dto';
import { DeleteResult } from 'typeorm';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('take', new DefaultValuePipe(25), ParseIntPipe) take: number,
  ): Promise<Team[]> {
    return this.teamService.findAll(skip, take);
  }

  @Get('count')
  getCount(): Promise<number> {
    return this.teamService.getCount();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Team> {
    return this.teamService.findOne(+id);
  }

  @Get('slug:slug')
  findBySlug(@Param('slug') slug: string): Promise<Team> {
    return this.teamService.findBySlug(slug);
  }

  @Post('search')
  search(@Body() searchTeamDto: SearchTeamDto): Promise<Team[]> {
    return this.teamService.search(searchTeamDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.teamService.delete(+id);
  }
}
