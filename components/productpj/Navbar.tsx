import style from '../../assets/scss/productpj/Navbar.module.scss'
import cartLogo from '../../assets/images/productpj/cart.png'
import searchLogo from '../../assets/images/productpj/search.png'
import { NextPage } from 'next'

 const Navbar:NextPage = () => {
  return (
    <nav className={style.Navbar}>
      <div className={style.container}>
        <ul>
          <li><h2>Chanasia</h2></li>
          <li>
            <span className={style.search_box}>
              <input type="text" className={style.search} placeholder="ค้นหาใน Chanasia" />
              <button type="button" className={style.btn_nav}><img className={style.icon} src={searchLogo.src} alt="search here" /></button>
            </span>
          </li>
          <li>
            <button type="button" className={style.btn_cart}><img className={style.icon} src={cartLogo.src} alt="cart here" /></button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar