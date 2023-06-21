import express from 'express';
import validateRequest from '../../middlewares/requestValidation';
import { StudentValidation } from './student.validation';
import { StudentController } from './student.controller';
const router = express.Router();

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);

router.get('/', StudentController.getAllStudent);

export const StudentRoutes = router;
