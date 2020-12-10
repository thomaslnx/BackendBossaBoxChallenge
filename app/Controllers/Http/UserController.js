'use strict'

const User = use('App/Models/User')

class UserController {
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

  async index () {
    const user = User.all()

    return user
  }

  async destroy ({ request, response, params }) {
    const id = params.id
    console.log('Valor de params: ', params)
    const user = await User.find(id)

    await user.delete()

    return response.json({ message: 'User removed successfuly!' })
  }
}

module.exports = UserController
