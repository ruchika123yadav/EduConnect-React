import './navbar.css'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


function Navbar(){

    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
        // active when we scroll the web page
   window.addEventListener('scroll',()=>{
    // value of the scroll position form the top by 50 px
    window.scrollY>600?setSticky(true):setSticky(false)
   })
    },[])

    const [menu,setMenu] = useState(false);
   const toggleMenu=()=>{
    menu?setMenu(false):setMenu(true);
   }

    return (
        <div>
            <nav className={`container ${sticky?'dark-nav':''}`}>
          <img src={logo} alt="Logo" className='logo' />
          
            <ul className={menu?'':'hide-menu'}> 
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                {/* offset -> when scrolling the page the space from the top */}
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program </Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us </Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus </Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials </Link></li>
                <li> <Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            </ul>
                <img src={menu_icon} alt="icon" className='menu-icon' onClick={toggleMenu}/>
            </nav>
        </div>
    )
}

export default Navbar