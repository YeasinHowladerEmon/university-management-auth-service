import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorsHandler';
import routes from './app/modules/routes';

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
export default app;
