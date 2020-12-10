'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tool extends Model {
  // Method to not show user_id field on user created result
  static get hidden () {
    return ['user_id', 'created_at', 'updated_at']
  }
}

module.exports = Tool
