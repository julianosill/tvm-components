import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-3xl font-semibold'>Sign-up Page</h1>
      <SignUp
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
