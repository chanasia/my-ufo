"use client"
import { unstable_noStore as noStore } from 'next/cache'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { motion } from 'framer'
import Link from 'next/link';

type Props = {
}

export default function Home({ }: Props) {
  noStore()

  return (
    <div className='relative overflow-hidden h-full'>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none bg-black">
        <div className="py-8 text-xl w-3/5 mx-auto border-b border-gray-400 flex justify-around text-center">
          <Link href="#" className='cursor-default'><DataObjectIcon className='text-3xl w-[24px] h-[24px]' /></Link>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ duration: 0.3 }}  
          >
          <h1 className='text-xl w-[150px]'>CHANASIA</h1>
          </motion.div>
          <button><DarkModeIcon className='text-3xl w-[24px] h-[24px]' /></button>
        </div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
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
      </motion.div>
    </div>
  )
}