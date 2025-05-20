// This file contains unit tests for the TypeController class.

import { Test, TestingModule } from '@nestjs/testing';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';

describe('TypeController', () => {
  let controller: TypeController;
  let service: TypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeController],
      providers: [
        {
          provide: TypeService,
          useValue: {
            getLikeCount: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TypeController>(TypeController);
    service = module.get<TypeService>(TypeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getLikeCount', () => {
    it('should call service and return like count', async () => {
      const mockResponse = {
        objectType: 'trees',
        objectId: '186734',
        numLikes: 5,
      };
      (service.getLikeCount as jest.Mock).mockResolvedValue(mockResponse);

      const result = await controller.getLikeCount('trees', '186734');
      expect(result).toEqual(mockResponse);
      expect(service.getLikeCount).toHaveBeenCalledWith('trees', '186734');
    });
  });
});
