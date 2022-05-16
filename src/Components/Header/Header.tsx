import styles from './Header.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Menu from '../Menu/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faLandmark } from '@fortawesome/free-solid-svg-icons';

/* interface classState {
  activeObject: null | {id: number}
    objects: Array<{id: number, name:string, route: string}>
} */

function Header() {
const [stylish, setStylish]= useState(false);

  return (
    <header>
      <div className={styles.logo}>
        <h1><NavLink 
        className={styles.mainLogo}
        to={'/'}>FastyRide</NavLink></h1>
      </div>  
      <div className={stylish ?`${styles.nav} ${styles.navActive}`:`${styles.nav} ${styles.navInactive}`}>
        <NavLink 
        className={styles.navLinks}
        to={'/'}><FontAwesomeIcon icon={faHouse} />Home</NavLink>
        <NavLink 
        className={styles.navLinks}
        to={'/myfavorites'}><FontAwesomeIcon icon={faHeart} />My Favorites</NavLink>
        <NavLink 
        className={styles.navLinks}
        to={'/about'}><FontAwesomeIcon icon={faLandmark} />About</NavLink>
      </div>
      <div className={styles.burguerBtn}
        onClick= {()=> {setStylish(!stylish)}}>
        <Menu />
      </div>
    </header>
  )
}

export default Header