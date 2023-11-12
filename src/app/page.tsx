import { unstable_noStore as noStore } from 'next/cache'
import { FadeInTransition } from '../components/FamerAnimation'
import Link from 'next/link';
import type { Metadata } from 'next'
import {HomeNavbar } from '@/components/Navbar';

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
      <HomeNavbar />

      <FadeInTransition>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col text-lg text-center gap-4 select-none">
            <Link className="border border-black dark:border-white rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200 dark:hover:border-fuchsia-700" href="/projects">Projects</Link>
            <Link className="border border-black dark:border-white rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200 dark:hover:border-fuchsia-700" href="/memo">Memo</Link>
            <Link className="border border-black dark:border-white rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200 dark:hover:border-fuchsia-700" href={
              process.env.NODE_ENV === "production" ?
                `http://resume.${process.env.HOSTNAME}` : "#"
            }>Resume</Link>
          </div>
        </div>
      </FadeInTransition>
    </div>
  )
}