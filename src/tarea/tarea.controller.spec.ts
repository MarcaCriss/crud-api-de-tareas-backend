import { Test, TestingModule } from '@nestjs/testing';
import { TareaController } from './tarea.controller';

describe('TareaController', () => {
  let controller: TareaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TareaController],
    }).compile();

    controller = module.get<TareaController>(TareaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
