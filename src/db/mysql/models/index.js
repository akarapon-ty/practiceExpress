import db from '../connector'

class Model{
    constructor(tableName){
        this.db = db
        this.tableName = tableName
    }

    getTableName() { return this.tableName }

    selectNoArchive() {
        const queryBuilder = this.db.from(this.getTableName())
        return queryBuilder
    }

    async insertData(inputObj) {
        const result = await this.db(this.getTableName()).from(this.getTableName()).insert(inputObj)
        return result
    }
}

export default Model
