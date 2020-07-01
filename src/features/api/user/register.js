import model from '../../../db/mysql/models/user'

const register = async (input) => {
    try {
        await model.register(input) 
        return true
    } catch (error) {  return { error: error.details[0].message } }
}

export default register
