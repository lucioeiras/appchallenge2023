'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useContext, useState, FormEvent } from 'react'

import UserContext from '../../contexts/user'

import {
  EnvelopeSimple,
  Key,
  SignIn,
  Gauge,
  Laptop,
  WifiMedium,
  Smiley,
  ShieldCheck,
} from '@phosphor-icons/react'

export default function Page() {
  const user = useContext(UserContext)

  const [name, setName] = useState<String>('')
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const [confirmPassword, setConfirmPassword] = useState<String>('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    console.log(process.env.NEXT_PUBLIC_API_URL)

    if (password === confirmPassword) {
      await user.register(name, email, password)
    }
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

        <div className="absolute top-0 z-20 w-auto min-w-full min-h-full max-w-none video-background-signup"></div>

        <video
          autoPlay loop muted
          className="absolute top-0 z-10 w-auto min-w-full min-h-full max-w-none -left-1/4 -scale-x-100"
        >
          <source src="signup.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-1/2 p-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl text-slate-800 font-medium text-center">
          Crie sua conta
        </h2>
        <p className="text-center mt-4 text-slate-500">
          Se você já possui conta, <Link href="/signin" className="underline">faça seu login aqui</Link>.
        </p>

        <form className="w-full mt-10" onSubmit={e => onSubmit(e)}>
          <div>
            <label htmlFor="name" className="text-slate-600">Nome</label>
            <div className="flex mt-2 p-5 border-gray-200 border rounded-lg">
              <Smiley size={24} color="#A0AEC0" className="mr-4" />
              <input
                name="name"
                type="text"
                placeholder="Digite o seu nome"
                className="placeholder-slate-400 w-full text-slate-700"
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="text-slate-600">E-mail</label>
            <div className="flex mt-2 p-5 border-gray-200 border rounded-lg">
              <EnvelopeSimple size={24} color="#A0AEC0" className="mr-4" />
              <input
                name="email"
                type="email"
                placeholder="Digite o seu melhor e-mail"
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
                placeholder="Digite a sua senha mais segura"
                className="placeholder-slate-400 w-full text-slate-700"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="confirm" className="text-slate-600">Confirme sua senha</label>
            <div className="flex mt-2 p-5 border-gray-200 border rounded-lg">
              <ShieldCheck size={24} color="#A0AEC0" className="mr-4" />
              <input
                name="confirm"
                type="password"
                placeholder="Digite a senha novamente"
                className="placeholder-slate-400 w-full text-slate-700"
                onChange={e => setConfirmPassword(e.target.value)}
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
