import React from 'react'
import './Navbar.css'

import navlogo from '../../assets/nav-logo.png'
import navProfile from '../../assets/nav-profile.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} className='nav-logo' alt=''/>
        <img src={navProfile} className='nav-profile' alt=''/>
    </div>
  )
}

export default Navbar;
