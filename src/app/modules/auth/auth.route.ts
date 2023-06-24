import express from 'express';
import validateRequest from '../../middlewares/requestValidation';
import { authValidation } from './auth.validation';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.authZodSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
