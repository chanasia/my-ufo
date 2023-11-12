import { unstable_noStore as noStore } from 'next/cache'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { FadeInTransition, FadeTitle } from '../components/FamerAnimation'

import Link from 'next/link';
import Head from 'next/head';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Chanasia',
  description: 'Personal website',
}

type Props = {
}

export default function Home({ }: Props) {
  noStore()

  return (
    <div className='relative overflow-hidden h-full'>
      <Head>
        <title>Home | Chanasia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none">
        <div className="py-8 text-xl w-3/5 mx-auto border-b border-gray-400 flex justify-around text-center">
          <div className='cursor-default'><DataObjectIcon className='text-3xl w-[24px] h-[24px]' /></div>
          <FadeTitle>
            <h1 className='text-xl w-[150px]'>CHANASIA</h1>
          </FadeTitle>
          <button><DarkModeIcon className='text-3xl w-[24px] h-[24px]' /></button>
        </div>
      </div>
      <FadeInTransition>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col text-lg text-center gap-4 select-none">
            <Link className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href="/projects">Projects</Link>
            <Link className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href="/memo">Memo</Link>
            <Link className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href={
              process.env.NODE_ENV === "production" ?
                `http://resume.${process.env.HOSTNAME}` : "#"
            }>Resume</Link>
          </div>
        </div>
      </FadeInTransition>
    </div>
  )
}