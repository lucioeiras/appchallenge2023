'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

import Sidebar from '@/components/Sidebar'

import UserContext from '@/contexts/user'

export default function HomePage() {
  const router = useRouter()
  const user = useContext(UserContext)

  if (!user.data.token) {
    router.push('/signin')
  }

  return (
    <div className="flex relative">
      <Head>
        <title>Home | ViaSat</title>
      </Head>

      <Sidebar tab="home" />
      <main className="ml-24 p-11">
        <h2 className="text-3xl text-slate-700 font-light text-center">
          Seja bem-vindo, {user.data.name}!
        </h2>
      </main>
    </div>
  )
}
