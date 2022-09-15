import React from 'react'
import CartWidget from '../CartWidget/Cart';

const NavBar = () => {
  return (
    <div className='container'>
        <nav className='nav'>
            <div className='nav_brand'>
                <a className='nav_link' href='#'>MiMarca</a>
            </div>
            <ul className='nav_list'>
                <li>
                    <a className='nav_link' href='#'>Categoria1</a>
                </li>
                <li>
                    <a className='nav_link' href='#'>Categoria2</a>
                </li>
                <li>
                    <a className='nav_link' href='#'>
                        <CartWidget/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;