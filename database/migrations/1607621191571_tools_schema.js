'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolsSchema extends Schema {
  up () {
    this.create('tools', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.string('title', 80).notNullable()
      table.string('link', 254).notNullable()
      table.text('description').notNullable()
      table.specificType('tags', 'varchar(50)[]').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tools')
  }
}

module.exports = ToolsSchema
