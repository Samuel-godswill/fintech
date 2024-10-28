import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ?  setSticky(true) : setSticky(false); 
        })
    },[]);

    const [mobile, setMobile] = useState(false)
    const toggleMenu = () => {
        mobile ? setMobile(false) : setMobile(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobile?'':'hide-mobile'}>
            <li>Personal Loan</li>
            <li>One Card</li>
            <li>Savings</li>
            <li>Checking</li>
            <li>Help</li>
        </ul>
        <button className='btn'>sign in</button>
        <img className='menu-icon' src={menu} alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar