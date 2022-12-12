import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landy Andria</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen h-screen' >
        <div className='relative w-screen h-full overflow-hidden'>
          <Image src="/home.jpg" alt="landyng image" width={
            1920
          }
            height={
              1080
            }
            className='' />
        </div>

      </main>

      <footer>

      </footer>
    </div>
  )
}
