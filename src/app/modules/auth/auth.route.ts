import express from 'express';
import validateRequest from '../../middlewares/requestValidation';
import { authValidation } from './auth.validation';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.authZodSchema),
  AuthController.loginUser
);
router.post(
  '/refresh-token',
  validateRequest(authValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);
router.patch(
  '/change-password',
  validateRequest(authValidation.changePasswordZodSchema),
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  AuthController.changePassword
);

export const AuthRoutes = router;
