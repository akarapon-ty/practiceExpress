import Joi from '@hapi/joi'

const validation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(4)
            .max(30)
            .required(),
        password: Joi.string()
            .min(8)
            .max(20)
            .required(),
        repeatPassword: Joi.ref('password')
    }).with('password', 'repeatPassword')

    return schema.validateAsync(data)

}

export default validation
