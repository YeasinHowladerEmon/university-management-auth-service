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

export const authValidation = {
  authZodSchema,
};
