import express from 'express'
import { registerController } from '../features/api/user/userController'

const router = express.Router()

router.post('/register', registerController)

export default router