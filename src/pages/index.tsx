import Image from 'next/image'

export default function Home() {
  return (
    <main
      className='flex items-center justify-center w-full bg-black h-screen text-white'
    >
      <div className='text-2xl font-light'>
        This site has been moved to <a href="https://lab-codes.vercel.app/" className='font-bold text-blue-400'>https://lab-codes.vercel.app/</a>
      </div>
    </main>
  )
}
