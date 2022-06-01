import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </section>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  return {
    props: {
      session,
    },
  }
}
