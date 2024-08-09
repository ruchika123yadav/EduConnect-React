import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about container'>
      <div className="about-left">
      <img src={about_img} alt="img" className='about_img' />
      <img src={play_icon} alt="img" className='play_icon' />

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sed a corrupti modi quisquam rerum atque praesentium, tempore, nesciunt optio ex? Quas eligendi aut facilis ex et deserunt sunt maxime?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil recusandae itaque voluptate placeat unde eum reiciendis laudantium! Molestias, maxime?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, reiciendis molestias rerum tempora quos rem doloremque excepturi repellendus quam quae.</p>


      </div>
    </div>
  )
}

export default About
