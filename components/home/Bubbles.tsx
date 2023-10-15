import { NextPage } from "next";
import style from "../../assets/scss/home/Bubbles.module.scss"

const Bubbles: NextPage = () => {
  return(
    <>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
      <div className={style.bubble}><span className={style.dot}></span></div>
    </>
  )
}

export default Bubbles;