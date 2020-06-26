import express from 'express'
import authentication from '../features/api/user'

const routerLogin = express.Router()

routerLogin.post('/user', authentication)