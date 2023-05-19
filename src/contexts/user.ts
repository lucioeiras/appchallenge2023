import { createContext } from 'react'

import api from '../config/api'

interface UserInterface {
  data: {
    _id?: String,
    name?: String
    email?: String
    password?: String
    token?: String
  }

  login(email: String, password: String): Promise<void>
  register(name: String, email: String, password: String): Promise<void>
}

const UserContext = createContext<UserInterface>({
  data: {},

  async login(email, password) {
    const { data } = await api.post('/login', { email, password })
    this.data = data
  },

  async register(name, email, password) {
    await api.post('/user', { name, email, password })
    this.login(email, password)
  }
})

export default UserContext
