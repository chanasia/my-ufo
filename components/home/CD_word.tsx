import { NextPage } from "next"; 
import style from '../../assets/scss/home/CD_word.module.scss'

const CD_word: NextPage = () => {
  return(
    <span className={style.CD_word}>
      <span className={style.base}>i am passtionate </span>
      <div className={style.word_animate}>
        <span className={`${style.word} ${style.active}`}>fontend</span>
        <span className={`${style.word}`}>backend</span>
        <span className={`${style.word}`}>fullstack</span>
      </div>
    </span>
  )
}

export default CD_word