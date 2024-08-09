import './navbar.css'
import React from 'react'
import logo from '../../assets/logo.png'

function Navbar(){
    return (
        <div>
            <nav className='container'>
          <img src={logo} alt="Logo" className='logo' />
          
            <ul> 
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li> <button className='btn'>Contact us</button></li>
            </ul>
                
            </nav>
        </div>
    )
}

export default Navbar