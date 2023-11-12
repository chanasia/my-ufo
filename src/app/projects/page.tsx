import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import './style.scss'
import { FadeInTransition } from '../../components/FamerAnimation'
import type { Metadata } from 'next'
import { PageNavbar } from '@/components/Navbar';
import { unstable_noStore as noStore } from 'next/cache'

export const metadata: Metadata = {
  title: 'Projects | Chanasia',
  description: 'Personal website',
}

type Props = {}

export default function Home({}: Props) {
  noStore()

  return (
    <div className='relative overflow-hidden h-full'>
      <PageNavbar>
        My Projects
      </PageNavbar>

      <FadeInTransition>
      <div className='h-screen overflow-hidden'>
        <div className="mt-[120px] w-3/5 mx-auto grid grid-cols-3 gap-4">
          <div className='border border-dashed border-black dark:border-white rounded-lg p-4 h-[109px]'>
            <h2 className='text-center repo-name'>anime-recommendation</h2>
            <div className='mt-2 flex gap-4 justify-center'>
              <a href="https://github.com/chanasia/anime-recommendation" className='border p-2 border-black dark:border-white dark:hover:border-fuchsia-700 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank' title='Repository'><CodeIcon /></a>
              <a href={`http://rengme.${process.env.HOSTNAME}`} className='border p-2 border-black dark:border-white dark:hover:border-fuchsia-700 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank' title='Website'><LaunchIcon /></a>
            </div>
          </div>

          <div className='border border-dashed border-black dark:border-white rounded-lg p-4 h-[109px]'>
            <h2 className='text-center repo-name'>Covid-Interface</h2>
            <div className='mt-2 flex gap-4 justify-center'>
              <a href="https://github.com/chanasia/Covid-Interface" className='border p-2 border-black dark:border-white dark:hover:border-fuchsia-700 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank' title='Repository'><CodeIcon /></a>
              <a href="https://chanasia.github.io/Covid-Interface/" className='border p-2 border-black dark:border-white dark:hover:border-fuchsia-700 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank' title='Website'><LaunchIcon /></a>
            </div>
          </div>

          <div className='border border-dashed border-black dark:border-white rounded-lg p-4 h-[109px]'>
            <h2 className='text-center repo-name'>wat-klai-ban</h2>
            <div className='mt-2 flex gap-4 justify-center'>
              <a href="https://github.com/chanasia/wat-klai-ban" className='border p-2 border-black dark:border-white dark:hover:border-fuchsia-700 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank' title='Repository'><CodeIcon /></a>
              <a href="https://chanasia.github.io/wat-klai-ban/" className='border p-2 border-black dark:border-white dark:hover:border-fuchsia-700 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank' title='Website'><LaunchIcon /></a>
            </div>
          </div>

        </div>
      </div>
      </FadeInTransition>
    </div>
  )
}