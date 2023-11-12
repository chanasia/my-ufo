import DataObjectIcon from '@mui/icons-material/DataObject';
import { FadeTitle } from '../components/FamerAnimation'
import ThemeSwitcher from '@/components/ThemeSwitcher';
import type { ReactNode } from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type PageNavbarProps = {
  children: ReactNode
}

export const PageNavbar = ({children}: PageNavbarProps) => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none">
      <div className="py-8 text-xl w-3/5 mx-auto border-b border-black dark:border-white grid grid-cols-3">

        <div className='text-center hover:text-fuchsia-700 transition-colors duration-200 cursor-pointer' title='Back'>
          <Link href="/"><ArrowBackIcon className='text-3xl leading-[32px]' /></Link>
        </div>

        <div className='text-center'>
          <FadeTitle>
            <h1 className='text-xl leading-[32px] dark:text-white'>{children}</h1>
          </FadeTitle>
        </div>

        <div className='mx-auto' title='Toggle dark mode'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export const HomeNavbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none">
      <div className="py-8 text-xl w-3/5 mx-auto border-b border-black dark:border-white grid grid-cols-3">

        <div className='text-center'>
          <DataObjectIcon className='text-[28px]' />
        </div>

        <div className='text-center'>
          <FadeTitle>
            <h1 className='text-xl leading-[32px] dark:text-white'>CHANASIA</h1>
          </FadeTitle>
        </div>

        <div className='mx-auto' title='Toggle dark mode'>
          <ThemeSwitcher />
        </div>

      </div>
    </div>
  )
}