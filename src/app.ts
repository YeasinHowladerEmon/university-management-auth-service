import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorsHandler'

const app: Application = express()

app.use(cors())

// parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application

app.use('/api/v1/users/', userRouter)

// testing
// app.get('/', (req: Request, res: Response, next:NextFunction) => {
//   // throw new ApiError(400, 'Error is Error')
// next('error is error') // Error
// })

//global error handler
app.use(globalErrorHandler)

export default app
