import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import styles from'./navBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.image_1}>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <NavLink className={styles.nav_link_logo} to='/'>ImportShop</NavLink>
            </div>
            <ul className='nav_list'>
                <li>
                    <NavLink className='nav_link' to='/categoria/remeras' >Remeras</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/categoria/pantalones' >Pantalones</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/cart'>
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div className={styles.frase_1}>
            <p className={styles.p_1}>Las Mejores prendas a tu estilo</p> 
            <p className={styles.p_2}>Compra ahora, usalo mañana</p>       
            <button className={styles.boton}>Comprar ahora</button>
        </div>
    </div>
  )
}

export default NavBar;