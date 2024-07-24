export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='container flex min-h-svh items-center justify-center'>
      {children}
    </div>
  )
}
