"use client"
import LaunchIcon from '@mui/icons-material/Launch';
import DataObjectIcon from '@mui/icons-material/DataObject';
import './style.scss'
import UndoIcon from '@mui/icons-material/Undo';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion } from 'framer'
import Link from 'next/link'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='relative overflow-hidden h-full'>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none bg-black">
        <div className="py-8 text-xl w-3/5 mx-auto border-b border-gray-400 flex justify-around text-center">
          <Link href="/"><UndoIcon className='text-3xl w-[24px] h-[24px]' /></Link>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ duration: 0.3 }}   
          >
            <h1 className='text-xl w-[150px]'>My Projects</h1>
          </motion.div>
          <button><DarkModeIcon className='text-3xl w-[24px] h-[24px]' /></button>
        </div>
      </div>
      <motion.div
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}
        exit={{y:-20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      <div className='h-screen overflow-hidden'>
        <div className="mt-[120px] w-3/5 mx-auto grid grid-cols-3 gap-4">
          <div className='border border-dashed rounded-lg p-4 h-[109px]'>
            <h2 className='text-center repo-name'>anime-recommendation</h2>
            <div className='mt-2 flex gap-4 justify-center'>
              <a href="https://github.com/chanasia/anime-recommendation" className='border p-2 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank'>Repo <DataObjectIcon /></a>
              <a href="http://rengme.chanasia.site/" className='border p-2 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank'>Web <LaunchIcon /></a>
            </div>
          </div>

          <div className='border border-dashed rounded-lg p-4 h-[109px]'>
            <h2 className='text-center repo-name'>Covid-Interface</h2>
            <div className='mt-2 flex gap-4 justify-center'>
              <a href="https://github.com/chanasia/Covid-Interface" className='border p-2 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank'>Repo <DataObjectIcon /></a>
              <a href="https://chanasia.github.io/Covid-Interface/" className='border p-2 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank'>Web <LaunchIcon /></a>
            </div>
          </div>

          <div className='border border-dashed rounded-lg p-4 h-[109px]'>
            <h2 className='text-center repo-name'>wat-klai-ban</h2>
            <div className='mt-2 flex gap-4 justify-center'>
              <a href="https://github.com/chanasia/wat-klai-ban" className='border p-2 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank'>Repo <DataObjectIcon /></a>
              <a href="https://chanasia.github.io/wat-klai-ban/" className='border p-2 rounded-md hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200' target='_blank'>Web <LaunchIcon /></a>
            </div>
          </div>

        </div>
      </div>
      </motion.div>
    </div>
  )
}