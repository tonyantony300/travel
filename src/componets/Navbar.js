import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

  return (
    <>
     <nav className="navbar">
         <div className="nav-container">
             <Link to='/' className='navbar-logo'>
                 <h2>Travel <i className="fab fa-typo3"/> </h2>
            </Link>
            <div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times': 'fas fa-bars'}> </i>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign-up</Link>
                    </li>
                </ul>
            </div>
         </div>
     </nav>
    </>
  )
}

export default Navbar