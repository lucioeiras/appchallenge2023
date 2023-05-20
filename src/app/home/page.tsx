'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import UserContext from '../../contexts/user'

export default function HomePage() {
  const router = useRouter()
  const user = useContext(UserContext)

  if (!user.data.token) {
    router.push('/signin')
  }

  return (
    <h1>Hello, World!</h1>
  )
}
