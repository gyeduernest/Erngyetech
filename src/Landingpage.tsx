import Calltoaction1 from "./Pages/Calltoaction1"
import Calltoaction2 from "./Pages/Calltoaction2"
import Quote from "./Pages/Ernest"
import Experience from "./Pages/Experience"
import Fewprojects from "./Pages/Fewprojects"
import Footer from "./Pages/Footer"
import Hero from "./Pages/Hero"
import Nav from "./Pages/Nav"
import Skills from "./Pages/Skills"
import '../src/App.css'


function Landingpage() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Skills/>
      <Calltoaction1/>
      <Fewprojects/>      
      <Experience/>
       <Quote/>
       <Calltoaction2/>
       <Footer/>     
    </>
  )
}

export default Landingpage
