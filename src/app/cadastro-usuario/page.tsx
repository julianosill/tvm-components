import Image from 'next/image'

import * as logo from '@/assets/branding/logo-short.svg'
import { PatternOverlay } from '@/components/pattern-overlay'
import { InternalLink } from '@/components/ui/internal-link'

import { RegisterUserForm } from './_components/register-user-form'
import * as image from './assets/image.jpg'

export default function SignUpPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-violet-950'>
      <PatternOverlay />
      <div className='z-10 flex w-10/12 max-w-6xl overflow-hidden rounded-3xl'>
        <div className='flex-1'>
          <Image
            src={image}
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <main className='w-full max-w-lg space-y-10 bg-background p-16'>
          <header className='flex items-center justify-between gap-2'>
            <Image
              src={logo}
              alt='Tem Vaga Mestre?'
              className='w-28'
            />
            <div className='text-sm'>
              Já tem uma conta? <InternalLink href='/'>Faça login</InternalLink>
            </div>
          </header>
          <h1 className='text-3xl font-bold text-foreground-hard'>
            Entre num mundo de diversão e aventura!
          </h1>
          <RegisterUserForm />
        </main>
      </div>
    </div>
  )
}
