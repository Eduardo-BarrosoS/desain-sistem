
import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Logo } from '../assets/Logo';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import './styles/global.css';

export function SingIn() {

    const [isSingedIn, setIsSingedIn] = useState(false)

    function handleSingIn(event: FormEvent) {
        event.preventDefault()
    }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>

      <header className='flex flex-col items-center'>

      <Logo />

      <Heading size='lg' className='mt-4 mb-1'> 
        Ignite Lab
      </Heading>

      <Text size='lg' className="text-gray-400" >
        Faça login e comece a usar
      </Text>
      </header>
      <form action="" onSubmit={() => {
        handleSingIn()
      }} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-2'>
          <Text className='font-semibold'>Endereço se email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />s
            </TextInput.Icon>
            <TextInput.Input type='text' id='email' placeholder='exemplo@gmail.com' />
          </TextInput.Root>
        </label>
       
        <label htmlFor="password" className='flex flex-col gap-2'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='******' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id="remember"/>
          <Text size='sm' className='text-gray-200'> Lembra de mim por 30 dias</Text>
        </label>

        <Button className='mt-4' type='submit'> Entrar na plataforma </Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size="sm">
          <a href="" className='text-gray-400 underline hover:text-gray-200'> Esqueceu sua senha </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className='text-gray-400 underline hover:text-gray-200'> Não possui conta? Crie uma agora! </a>
        </Text>
      </footer>
    </div>
  )
}