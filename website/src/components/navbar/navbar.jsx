import './navbar.css'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

function Navbar(){

    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
        // active when we scroll the web page
   window.addEventListener('scroll',()=>{
    // value of the scroll position form the top by 50 px
    window.scrollY>600?setSticky(true):setSticky(false)
   })
    },[])

    return (
        <div>
            <nav className={`container ${sticky?'dark-nav':''}`}>
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