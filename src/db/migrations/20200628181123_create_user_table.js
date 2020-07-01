const tableName = 'user'

exports.up = async knex => knex.schema.createTable(tableName, (table) => {
  table.increments()
  table.string('name', 191)
  table.string('role', 191)
  table.string('username', 191)
  table.string('password', 191)
  table.dateTime('create_at').defaultTo(knex.fn.now())
  table.string('google_id', 191)
  table.string('line_id', 191)
  table.integer('active').defaultTo(1)
  
})

exports.down = async knex => knex.schema.dropTableIfExists(tableName)