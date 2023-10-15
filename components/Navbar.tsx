import { NextPage } from "next";
import style from '../assets/scss/Navbar.module.scss'
import Image from "next/image";
import lightIcon from "/assets/images/light.png"
import darkIcon from "/assets/images/dark.png"

const Navbar: NextPage = () => {
  // console.log(style.icon + style.active)

  return(
    <nav className={style.Navbar}>
      <div className={style.container}>
        <h1>Chanasia</h1>
        <ul>
          <li className={style.theme_mode}>
            <span className={`${style.icon} ${style.light} ${style.active}`}>
              <Image src={lightIcon} width={25} height={25} />
            </span>
            <span className={`${style.icon} ${style.btn_dark}`}>
              <Image src={darkIcon} width={25} height={25} />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar