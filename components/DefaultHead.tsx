import Head from 'next/head'

export const DefaultHead = () => {
  return (
    <Head>
      <title>Ishaan Bharal</title>
      <meta name='description' content={`Ishaan Bharal's Homepage`} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
