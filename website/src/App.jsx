import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import Programs from './components/Programs/programs.jsx'
import Title from './components/Title/title.jsx'
import About from './components/About/about.jsx'
import Campus from './components/Campus/campus.jsx'
import Testimonials from './components/Testimonials/testimonials.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/footer.jsx'
import Player from './components/video_player/player.jsx'

function App() {

const[playState,setPlaySate]=useState(false);


  return (
    <>
      <Navbar />
      <Hero />
      <Title subtitle={"OUR PROGRAM"} title={"What we Offer"} />
      <Programs />
      <About setPlaySate={setPlaySate}/>
      <Title subtitle={"GALLERY"} title={"Campus Photos"} />
      <Campus/>
      <Title subtitle={"Testimonials"} title={"What Student Says"} />
      <Testimonials/>
      <Title subtitle={"CONTACT US"} title={"GET IN TOUCH"} />
      <Contact/>
      <Footer/>
      <div>
      <Player playState={playState} setPlaySate={setPlaySate}/>
</div>

    </>
  )
}

export default App
