import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

import * as logo from '@/assets/branding/logo-white.svg'
import { Button } from '@/components/ui/button'

export default function SignUpPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-violet-950'>
      <main className='max-w-3xl space-y-12 p-4 text-center'>
        <header className='space-y-4'>
          <h1 className='text-4xl font-bold text-white'>Bem-vindo ao</h1>
          <Image
            src={logo}
            alt='Tem Vaga Mestre'
            className='mx-auto w-full max-w-xl'
          />
        </header>
        <p className='text-lg text-neutral-200'>
          Explore um universo de aventuras e agende suas jogatinas de RPG de
          maneira fácil e divertida. Encontre mestres talentosos, monte seu
          grupo de jogadores e mergulhe em histórias épicas. Vamos começar sua
          jornada!
        </p>
        <Button
          size='lg'
          className='gap-2 bg-violet-600'
        >
          Cadastrar perfil
          <ChevronRight className='h-7 w-7' />
        </Button>
      </main>
    </div>
  )
}
