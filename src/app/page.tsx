'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import UserContext from '../contexts/user'

export default function Home() {
  const router = useRouter()
  const user = useContext(UserContext)

  console.log(user.data.token)

  user.data.token ? router.push('/home') : router.push('/signin')
}
