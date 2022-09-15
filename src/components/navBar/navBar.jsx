import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/Cart';

const NavBar = () => {
  return (
    <div className='container'>
        <nav className='nav'>
            <div className='nav_brand'>
                <NavLink className='nav_link' to='/'>MiMarca</NavLink>
            </div>
            <ul className='nav_list'>
                <li>
                    <NavLink className='nav_link' to='/categoria/films' >Peliculas</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/categoria/series' >Series</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/cart'>
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;