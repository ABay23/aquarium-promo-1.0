import Image from 'next/image'
import am from './images/am.jpg'

export default function Home() {
  return (
    <main className='flex min-w-full flex-col items-center justify-between p-10 w-screen'>
      <div
        className='z-10 w-full align-middle flex flex-col items-center p-2'
        // 'z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'
      >
        <div>
          <h1>Home Page</h1>
        </div>
        <section className='mb-8 relative'>
          <div className=' h-2/3 w-full bg-teal-400 p-4 rounded-lg'>
            <Image src={am} alt='burger' width={700} height={600}></Image>

            <p className='text-lg font-semibold mt-8 bg-slate-600'>
              {`Frank's Burger`}
            </p>
            <p className='mt-2 bg-teal-500'>
              Get a FREE SODA if the total of your ticket is more than $30 at
              the Seaside Cafe 🔥 .
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
