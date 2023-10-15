import style from '../../assets/scss/home/home.module.scss'
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons'
import CD_word from './CD_word'

const home: NextPage = () => {
  return(
    <div className={style.home}>
      <div className={style.container}>
        <h1>Chananuwat Chaysri</h1>
        <h2>I AM DEVELOPER..</h2>
        {/* <CD_word /> */}
        <div className={style.contacts}>
          <div className={style.button_contact}>
            <span className={style.icon}>
              <FontAwesomeIcon className={style.i} icon={faFacebookSquare} />
            </span>
            <span className={style.label}>Facebook</span>
          </div>
          <div className={style.button_contact}>
            <span className={style.icon}>
              <FontAwesomeIcon className={style.i} icon={faInstagramSquare} />
            </span>
            <span className={style.label}>Intragram</span>
          </div>
          <div className={style.button_contact}>
            <span className={style.icon}>
              <FontAwesomeIcon className={style.i} icon={faGithubSquare} />
            </span>
            <span className={style.label}>Github</span>
          </div>
          <div className={style.button_contact}>
            <span className={style.icon}>
              <FontAwesomeIcon className={style.i} icon={faLine} />
            </span>
            <span className={style.label}>Line</span>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default home