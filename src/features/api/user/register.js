import model from '../../../db/mysql/models/user'

const register = async (input) => {
    try {
        await model.register(input) 
        return true
        console.log('test')
    } catch (error) {  return { error: error.details[0].message } }
}

export default register
