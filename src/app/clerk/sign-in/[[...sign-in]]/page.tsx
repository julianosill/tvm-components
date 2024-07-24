import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-3xl font-semibold'>Sign-in Page</h1>
      <SignIn
        appearance={{
          elements: {
            header: 'hidden',
            footer: 'hidden',
            footerActionText: 'hidden',
            footerActionLink: 'hidden',
          },
        }}
      />
    </div>
  )
}
