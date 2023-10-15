import Link from "next/link"
import Navbar from "../components/Navbar"
import Bubbles from "../components/home/Bubbles"
import style from '../assets/scss/about/about.module.scss'

export default () => {
  return(
    <div className={style.about}>
      <Navbar />
      <Bubbles />
    </div>
  )
}