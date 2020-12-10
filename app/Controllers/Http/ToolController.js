'use strict'

const Tool = use('App/Models/Tool')
const User = use('App/Models/User')

class ToolController {
  /**
   * Create a new user
  */
  async store ({ request, response }) {
    const toolData = request.only(['user_id', 'title', 'link', 'description', 'tags'])
    console.log(toolData)

    if (!toolData.title || !toolData.link || !toolData.description || !toolData.tags || !toolData.user_id) {
      return response.status(400).json({ error: 'There are missing some information!' })
    }

    const userExist = await User.find(toolData.user_id)

    // Checks if user exist
    if (!userExist) {
      return response.status(400).json({ error: 'Id provided not found on databse!' })
    }

    const tool = await Tool.create(toolData)
    return tool
  }

  /**
   * List all users
  */
  async index () {
    const tools = await Tool.all()

    return tools
  }

  /**
   * Update a user
  */
  async update () {}

  /**
   * Delete a user
  */
  async destroy () {}
}

module.exports = ToolController
