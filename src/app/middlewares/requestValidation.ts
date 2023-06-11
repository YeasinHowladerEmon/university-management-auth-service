import { NextFunction, Request, Response } from 'express';
// import { UserValidation } from '../modules/users/user.validation'
import { AnyZodObject } from 'zod';

// const validateRequest: RequestHandler = async (req, res, next) => {
//   try {
//     await UserValidation.createUserZodSchema.parseAsync({
//       body: req.body,
//       query: req.query,
//       params: req.params,
//       cookies: req.cookies,
//     })
//     return next()
//   } catch (error) {
//     next(error)
//   }
// }
const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
