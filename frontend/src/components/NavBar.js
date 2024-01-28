import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'
import './NavBar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='logo'>
                <img width="130" height="130" src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><Link to="/">Home</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

            </div>
        </div>
    )
}

export default Navbar