import { createContext } from 'react'

import api from '../config/api'

interface UserInterface {
  _id?: string
  name?: string
  email?: string
  password?: string
  token?: string
}

interface UserContextInterface {
  data: UserInterface

  store(data: UserInterface): void
  login(email: string, password: string): Promise<void>
  register(name: string, email: string, password: string): Promise<void>
}

const UserContext = createContext<UserContextInterface>({
  data: {
    _id: localStorage.getItem('_id') || '',
    name: localStorage.getItem('name') || '',
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
    token: localStorage.getItem('token') || '',
  },

  store(data) {
    data._id && localStorage.setItem('_id', data._id)
    data.name && localStorage.setItem('name', data.name)
    data.email && localStorage.setItem('email', data.email)
    data.password && localStorage.setItem('password', data.password)
    data.token && localStorage.setItem('token', data.token)
  },

  async login(email, password) {
    const { data } = await api.post('/login', { email, password })
    this.data = data
    this.store(data)
  },

  async register(name, email, password) {
    await api.post('/user', { name, email, password })
    this.login(email, password)
  }
})

export default UserContext
