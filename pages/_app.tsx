import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className="h-screen bg-slate-200 overflow-y-scroll scrollbar-hide">
        <Header />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
