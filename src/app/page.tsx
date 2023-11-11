import { unstable_noStore as noStore } from 'next/cache'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DataObjectIcon from '@mui/icons-material/DataObject';

type Props = {
}

export default function Home({}: Props) {
  noStore()

  return (
    <div className='relative'>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center select-none bg-black">
          <div className="py-8  w-3/5 mx-auto border-b border-gray-400 flex justify-around">
            <DataObjectIcon className='text-3xl' />
            <h1 className='text-xl w-[150px] text-center'>CHANASIA</h1>
            <button><DarkModeIcon className='text-3xl' /></button>
          </div>
        </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col text-lg text-center gap-4 select-none">
          <a className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href="/projects">Projects</a>
          <a className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href="/memo">Memo</a>
          <a className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href={
            process.env.NODE_ENV === "production" ?
            `http://resume.${process.env.HOSTNAME}` : "#"
          }>Resume</a>
        </div>
      </div>
    </div>
  )
}