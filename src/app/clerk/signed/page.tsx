import { SignOutButton, UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function SignedPage() {
  return (
    <div className='flex flex-col items-center gap-12'>
      <p className='text-center text-6xl font-semibold'>
        Hello, is it me you are looking for?
      </p>

      <div className='flex items-center gap-6'>
        <UserButton />
        <SignOutButton>
          <Button>
            <ArrowLeft className='size-4' />
            Sign out
          </Button>
        </SignOutButton>
      </div>
    </div>
  )
}
