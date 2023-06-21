import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorsHandler';
import routes from './app/modules/routes';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());

// parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application

app.use('/api/v1/', routes);

// testing
// app.get('/', async (req: Request, res: Response, next:NextFunction) => {
//   console.log(x)
// // next('error is error') // Error
// })

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// const testId = async() => {
//   const testId = await generateFacultyId()
// console.log(testId);

// }
// testId()
export default app;
