import React from 'react'
import './footer.css';
import { Link } from 'react-scroll';


function Footer() {
  return (
    <div>
      <footer>
    <div className="footer-container">
        <div className="footer-about">
            <h4>About Us</h4>
            <p>Empowering students with the knowledge and skills to excel in a dynamic world. Join us in shaping the future of education.</p>
        </div>
         <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a> <Link to='hero' smooth={true} offset={0} duration={500}>Home </Link></a></li>
                <li><a> <Link to='program' smooth={true} offset={-260} duration={500}>Program </Link></a></li>
                <li><a> <Link to='about' smooth={true} offset={-150} duration={500}>About us </Link></a></li>
                <li><a> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus </Link></a></li>
                <li><a> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials </Link></a></li>
             </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Edusity. All Rights Reserved.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer
