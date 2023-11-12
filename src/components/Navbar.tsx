import DataObjectIcon from '@mui/icons-material/DataObject';
import { FadeTitle } from '../components/FamerAnimation'
import ThemeSwitcher from '@/components/ThemeSwitcher';
import type { ReactNode } from 'react';
import Link from 'next/link';
import UndoIcon from '@mui/icons-material/Undo';

type PageNavbarProps = {
  children: ReactNode
}

export const PageNavbar = ({children}: PageNavbarProps) => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none">
      <div className="py-8 text-xl w-3/5 mx-auto border-b border-black dark:border-white grid grid-cols-3">

        <div className='text-center'>
          <Link href="/"><UndoIcon className='text-3xl w-[24px] h-[24px]' /></Link>
        </div>

        <div className='text-center'>
          <FadeTitle>
            <h1 className='text-xl leading-[32px] dark:text-white'>{children}</h1>
          </FadeTitle>
        </div>

        <div className='mx-auto'>
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

        <div className='mx-auto'>
          <ThemeSwitcher />
        </div>

      </div>
    </div>
  )
}