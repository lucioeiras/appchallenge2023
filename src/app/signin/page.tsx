'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { FormEvent, useContext, useState } from 'react'

import UserContext from '../../contexts/user'

import {
  EnvelopeSimple,
  Key,
  SignIn,
  Gauge,
  Laptop,
  WifiMedium,
} from '@phosphor-icons/react'

export default function SignInPage() {
  const router = useRouter()
  const user = useContext(UserContext)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    await user.login(email, password)
    router.push('/home')
  }

  return (
    <main className="flex h-screen max-h-screen">
      <div className="relative flex min-h-full w-full overflow-hidden">
        <div className="relative z-30 p-12 max-w-4xl flex flex-col justify-between">
          <Image
            src="viasat-white.svg"
            alt="Viasat" width={120}
            height={40}
          />

          <div>
            <div className="flex">
              <Gauge size={48} color="#fff" weight="duotone" />
              <Laptop className="mx-3" size={48} color="#fff" weight="duotone" />
              <WifiMedium size={48} color="#fff" weight="duotone" />
            </div>

            <h1 className="text-5xl text-white font-light my-6 line leading-snug">
              Assuma o controle da sua internet e faça mais com o seu plano
            </h1>

            <p className="text-lg text-white">
              Monitore seu consumo, fique por dentro do seu limite e identifique os apps que mais consomem sua banda.
            </p>
          </div>
        </div>

        <div className="absolute top-0 z-20 w-auto min-w-full min-h-full max-w-none video-background-signin"></div>

        <video
          autoPlay loop muted
          className="absolute top-0 z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="signin.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-1/2 p-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl text-slate-800 font-light text-center">
          Entre na sua conta
        </h2>
        <p className="text-center mt-4 text-slate-500">
          Se você ainda não possui conta, crie uma
          <Link href="/signup" className="underline">  clicando aqui.</Link>
        </p>

        <form className="w-full mt-10" onSubmit={e => onSubmit(e)}>
          <div>
            <label htmlFor="email" className="text-slate-600">E-mail</label>
            <div className="flex mt-2 p-5 border-gray-200 border rounded-lg">
              <EnvelopeSimple size={24} color="#A0AEC0" className="mr-4" />
              <input
                name="email"
                type="email"
                placeholder="Digite o e-mail cadastrado"
                className="placeholder-slate-400 w-full text-slate-700"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className="text-slate-600">Senha</label>
            <div className="flex mt-2 p-5 border-gray-200 border rounded-lg">
              <Key size={24} color="#A0AEC0" className="mr-4" />
              <input
                name="password"
                type="password"
                placeholder="Digite a sua senha"
                className="placeholder-slate-400 w-full text-slate-700"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex text-white button-background rounded-lg w-full p-4 items-center justify-center cursor-pointer mt-8"
          >
            <SignIn weight="bold" className="mr-4" />
            Acessar a plataforma
          </button>
        </form>
      </div>
    </main>
  )
}
