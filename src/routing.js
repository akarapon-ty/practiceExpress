import express from 'express'
import routerLogin from './routers/router-login'

const routing = express.Router()

routing.use(routerLogin)

export default routing