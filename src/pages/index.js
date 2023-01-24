import Message from 'components/message'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Lets Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='my-10 max-w-lg mx-auto'>
        <div className=" flex flex-col gap-y-10">
          <Link href='/message'>
            <Message />
          </Link>

          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </section>
    </>
  )
}
