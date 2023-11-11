import { NextPage } from "next"

type Props = {}

const Home:NextPage = ({}: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col text-lg text-center gap-4 select-none">
        <a className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href="/projects">Projects</a>
        <a className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href="/memo">Memo</a>
        <a className="border rounded-lg py-4 px-20 hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors duration-200" href={
          process.env.NODE_ENV === "production" ?
          `http://resume.${process.env.HOST}` : "#"
        }>Resume</a>
      </div>
    </div>
  )
}


export default Home