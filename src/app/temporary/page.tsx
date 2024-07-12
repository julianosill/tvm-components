import Image from 'next/image'

import detailsRight from '@/assets/details-bottom-right.svg'
import detailsLeft from '@/assets/details-top-left.svg'
import diceBlue from '@/assets/dice-blue.png'
import diceGreen from '@/assets/dice-green.png'
import diceViolet from '@/assets/dice-violet.png'
import logo from '@/assets/logo.svg'

export default function Home() {
  return (
    <div className='flex min-h-svh items-center justify-center bg-violet-950'>
      <main className='z-10 w-10/12 max-w-3xl space-y-12'>
        <Image
          src={logo}
          alt=''
          className='h-auto w-full'
        />

        <p className='mx-auto max-w-xl text-center text-xl'>
          A plataforma que conecta a comunidade RPG, valorizando a simplicidade,
          a diversidade e a paixão pelo jogo.
        </p>

        <section className='flex items-center justify-center gap-12'>
          <Image
            src={diceViolet}
            alt=''
            className='animate-spin-slow-4 ease-in-out'
          />
          <Image
            src={diceGreen}
            alt=''
            className='animate-spin-slow-5 ease-in-out'
          />
          <Image
            src={diceBlue}
            alt=''
            className='animate-spin-slow-6 ease-in-out'
          />
        </section>
      </main>

      <Image
        src={detailsLeft}
        alt=''
        className='absolute left-4 top-4 h-auto w-full max-w-72'
      />
      <Image
        src={detailsRight}
        alt=''
        className='absolute bottom-4 right-4 h-auto w-full max-w-72'
      />
    </div>
  )
}
