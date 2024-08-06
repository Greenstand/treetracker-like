// This file contains the unit tests of the ObjectController class.

import { Test, TestingModule } from '@nestjs/testing';
import { ObjectController } from './object.controller';
import { ObjectService } from './object.service';

// describe('ObjectController', () => {
//     let controller: ObjectController;
//     let service: ObjectService;

//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             controllers: [ObjectController],
//             providers: [ObjectService],
//         }).compile();

//         controller = module.get<ObjectController>(ObjectController);
//         service = module.get<ObjectService>(ObjectService);
//     });

//     describe('handleGetObjectLikes', () => {
//         it('should call the service method to get object likes', async () => {
//             const type_id = '1';
//             const object_id = '2';

//             const serviceSpy = jest.spyOn(service, 'getObjectLikes');

//             await controller.handleGetObjectLikes(type_id, object_id);

//             expect(serviceSpy).toHaveBeenCalledWith(type_id, object_id);
//         });
//     });

//     describe('handleLikeObject', () => {
//         it('should call the service method to like an object', async () => {
//             const type_id = '1';
//             const object_id = '2';

//             const serviceSpy = jest.spyOn(service, 'likeObject');

//             await controller.handleLikeObject(type_id, object_id);

//             expect(serviceSpy).toHaveBeenCalledWith(type_id, object_id);
//         });
//     });

//     describe('handleUnlikeObject', () => {
//         it('should call the service method to unlike an object', async () => {
//             const type_id = '1';
//             const object_id = '2';

//             const serviceSpy = jest.spyOn(service, 'unlikeObject');

//             await controller.handleUnlikeObject(type_id, object_id);

//             expect(serviceSpy).toHaveBeenCalledWith(type_id, object_id);
//         });
//     });
// });