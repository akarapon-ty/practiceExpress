import express from 'express'
import register from './register'
import auth from './authentication'
import logout from './logout'

const router = express.Router()

router.post('/register', register)