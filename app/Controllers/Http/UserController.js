'use strict'

const User = use('App/Models/User')

class UserController {
  /**
   * Create a new user
  */
  async store ({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])

    // Check if all necessary fields are in request body.
    if (!userData.username || !userData.email || !userData.password) {
      return response.status(400).json({ error: 'Missing some in information!' })
    }

    // Check by email if user already exit.
    const userExist = await User.findBy('email', userData.email)

    if (userExist) {
      return response.status(400).json({ error: 'User already exist!' })
    }

    // After checks create a new user.
    const user = await User.create(userData)

    return user
  }

  /**
   * List all users
  */
  async index () {
    const user = User.all()

    return user
  }

  /**
   * Delete a user
  */
  async destroy ({ request, response, params }) {
    const { id } = params.id
    const user = await User.find(id)

    await user.delete()

    return response.json({ message: 'User removed successfuly!' })
  }

  /**
   * Update a user
  */
  async update ({ request, response, params }) {
    const { id } = params
    const userExist = await User.find(id)

    if (!userExist) {
      return response.status(400).json({ error: 'User id not found on database' })
    }

    if (request.body.username) {
      userExist.username = request.body.username
      userExist.save()
    }
    if (request.body.email) {
      userExist.email = request.body.email
      userExist.save()
    }
    if (request.body.password) {
      userExist.password = request.body.password
      userExist.save()
    }

    return userExist
  }
}

module.exports = UserController
