import express from 'express'
import userRouter from './routers/userRouter'

const routing = express.Router()

routing.use(userRouter)

export default routing