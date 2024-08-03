'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox, CheckboxLabel } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InternalLink } from '@/components/ui/internal-link'

const formSchema = z
  .object({
    email: z.string().email({ message: 'Insira um e-mail válido.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve conter 6 ou mais caracteres.' }),
    password_confirmation: z.string(),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: 'As senhas não coincidem. Por favor, repita a mesma senha.',
    path: ['password_confirmation'],
  })

type FormSchema = z.infer<typeof formSchema>

export function RegisterUserForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '', password_confirmation: '' },
  })

  const formError = form.formState.errors.root

  function handleRegister() {
    form.reset()
    form.setError('root', {
      message:
        'O e-mail informado já está cadastrado. Por favor, insira um novo e-mail.',
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className='space-y-6'
      >
        <FormField
          name='email'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  isError={form.formState.errors.email}
                  placeholder='Digite seu e-mail'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <div className='relative'>
                <FormControl>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    isError={form.formState.errors.password}
                    placeholder='Digite sua senha'
                    {...field}
                  />
                </FormControl>
                <Button
                  variant='ghost'
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-1 top-1 flex h-8 w-8 items-center justify-center bg-transparent text-foreground-soft'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 shrink-0' />
                  ) : (
                    <Eye className='h-5 w-5 shrink-0' />
                  )}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='password_confirmation'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme sua senha</FormLabel>
              <div className='relative'>
                <FormControl>
                  <Input
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    isError={form.formState.errors.password_confirmation}
                    placeholder='Repita a senha anterior aqui'
                    {...field}
                  />
                </FormControl>
                <Button
                  variant='ghost'
                  type='button'
                  onClick={() =>
                    setShowPasswordConfirmation(!showPasswordConfirmation)
                  }
                  className='absolute right-1 top-1 flex h-8 w-8 items-center justify-center bg-transparent text-foreground-soft'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 shrink-0' />
                  ) : (
                    <Eye className='h-5 w-5 shrink-0' />
                  )}
                </Button>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex items-center gap-2 text-sm'>
          <Checkbox id='terms' />
          <CheckboxLabel htmlFor='terms'>
            Eu concordo com os{' '}
            <InternalLink href='/'>Termos e Condições</InternalLink> e a{' '}
            <InternalLink href='/'>Política de Privacidade</InternalLink> da
            plataforma
          </CheckboxLabel>
        </div>

        {formError && (
          <Alert.Root variant='error'>
            <Alert.Description>{formError.message}</Alert.Description>
          </Alert.Root>
        )}

        <Button type='submit'>
          Criar conta e continuar
          <ChevronRight className='h-5 w-5' />
        </Button>
      </form>
    </Form>
  )
}
