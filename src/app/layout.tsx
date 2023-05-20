import '../styles/globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Medidor de Consumo | ViaSat</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
