import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ?  setSticky(true) : setSticky(false); 
        })
    },[])
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Personal Loan</li>
            <li>One Card</li>
            <li>Savings</li>
            <li>Checking</li>
            <li>Help</li>
        </ul>
        <button className='btn'>sign in</button>
    </nav>
  )
}

export default Navbar