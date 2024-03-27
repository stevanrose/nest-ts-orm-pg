import { Test, TestingModule } from '@nestjs/testing';
import { LoststolenreportService } from './loststolenreport.service';

describe('LoststolenreportService', () => {
  let service: LoststolenreportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoststolenreportService],
    }).compile();

    service = module.get<LoststolenreportService>(LoststolenreportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
