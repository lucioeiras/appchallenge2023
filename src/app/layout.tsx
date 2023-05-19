import '../styles/globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Medidor de consumo ViaSat',
  description: 'Monitore o consumo da sua internet e tenha insights sobre o seu uso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
