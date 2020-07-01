import Model from './index'
import validateData from '../schemas/userSchema'
import passwordHash from 'password-hash'

class User extends Model {

    parseValidateObj(input) {
        return {
            username: input.username,
            password: passwordHash.generate(input.password),
        }
    }

    async register(input) {
        const validateObj = await validateData(input)
        const inputObj = this.parseValidateObj(validateObj)
        const result = await this.insertData(inputObj)
        return result
    }


}

export default new User('user')