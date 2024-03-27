import { Test, TestingModule } from '@nestjs/testing';
import { LoststolenreportController } from './loststolenreport.controller';
import { LoststolenreportService } from './loststolenreport.service';

describe('LoststolenreportController', () => {
  let controller: LoststolenreportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoststolenreportController],
      providers: [LoststolenreportService],
    }).compile();

    controller = module.get<LoststolenreportController>(LoststolenreportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
