import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application

app.use('/api/v1/users/', userRouter)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('working successfully')
})

export default app
