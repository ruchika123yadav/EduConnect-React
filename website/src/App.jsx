import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import Programs from './components/Programs/programs.jsx'
import Title from './components/Title/title.jsx'

function App() {
 
  return (
    <>
       <Navbar/>
       <Hero/>
             <Title subtitle={"OUR PROGRAM"} title={"What we Offer"}/>
 <Programs/>

    </>
  )
}

export default App
