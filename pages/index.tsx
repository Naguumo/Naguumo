import Head from 'next/head'
import { TopBar } from '@components/TopBar'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Ishaan Bharal</title>
        <meta name='description' content={`Ishaan Bharal's Homepage`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Index</h1>
      </main>
    </>
  )
}

export default Home
