import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hjem',
  description: 'God bolig for fremtiden',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
