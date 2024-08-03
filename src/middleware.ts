import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/clerk/sign-in(.*)',
  '/clerk/sign-up(.*)',
])

export default clerkMiddleware(
  (auth, request) => {
    if (!isPublicRoute(request)) {
      try {
        // Retorna erro 404 se não possuir permissão de acesso ou não estiver logado.
        auth().protect()
      } catch (error) {
        auth().redirectToSignIn()
      }
    }
  },
  // Habilita logs no terminal em ambiente de desenvolvimento.
  { debug: process.env.NODE_ENV === 'development' },
)

export const config = {
  matcher: [
    // Ignora arquivos estáticos e internos do Next.js, a menos que sejam encontrados nos parâmetros de pesquisa.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Sempre executa em chamadas de API.
    '/(api|trpc)(.*)',
  ],
}
