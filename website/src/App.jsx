import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import Programs from './components/Programs/programs.jsx'
import Title from './components/Title/title.jsx'
import About from './components/About/about.jsx'

function App() {
 
  return (
    <>
       <Navbar/>
       <Hero/>
             <Title subtitle={"OUR PROGRAM"} title={"What we Offer"}/>
 <Programs/>
 <About/>

    </>
  )
}

export default App
