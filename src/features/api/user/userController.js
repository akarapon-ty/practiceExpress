import express from 'express'
import register from './register'
import auth from '../../../middleware/auth'
import logout from './logout'

export const registerController = async (req, res) => {
    const { body } = req
    const input = {
        username: body.username,
        password: body.password,
        repeatPassword: body.repeatPassword,
    }
    const { error } = await register(input)

    if (error) return res.status(400).send(error)

    return res.status(200).send('register complete')

}



