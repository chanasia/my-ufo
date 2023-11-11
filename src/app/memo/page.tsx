import { NextPage } from "next"

type Props = {}

const Memo:NextPage = ({}: Props) => {
  return (
    <div>
      <a href="/projects">Projects</a>
      <a href="/memo">Memo</a>
      <a href="resume.chanasia.site">Resume</a>
    </div>
  )
}

export default Memo