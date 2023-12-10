import Image from 'next/image'
import am from './images/am.jpg'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <h1>Home Page</h1>
        </div>
        <section className='mb-8 relative'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <Image src={am} alt='burger' width={700} height={600}></Image>

            <p className='text-lg font-semibold mt-8'>Section 1 Title</p>
            <p className='mt-2 bg-teal-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
