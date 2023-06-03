import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import logger from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`database is connected successfully`)
    app.listen(config.port, () => {
      logger.info(`Application listening at http://localhost:${config.port}`)
    })
  } catch (error) {
    logger.error(`failed to connect database`, error)
  }
}
boostrap()
