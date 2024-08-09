import React from 'react'
import './hero.css'
import arrow from '../../assets/dark-arrow.png'

function Hero(){
    return (

        <div className='hero container'>
            <div className="hero-txt">
            <h1>Shaping Minds for a Brighter Future</h1>
<p>Our innovative curriculum equips students with the essential knowledge, skills, and expertise to
     thrive in today’s ever-changing educational landscape.</p>

                <button className='btn'>Explore more <img src={arrow} alt="arrow" /></button>
            </div>

        </div>
    )
}

export default Hero