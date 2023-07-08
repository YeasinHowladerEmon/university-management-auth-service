import { z } from 'zod';

const authZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'Id is Required',
    }),
    password: z.string({
      required_error: 'password is Requried',
    }),
  }),
});
const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is Required',
    }),
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old Password is Required',
    }),
    newPassword: z.string({
      required_error: 'New Password is Required',
    }),
  }),
});

export const authValidation = {
  authZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
};
