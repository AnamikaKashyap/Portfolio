import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer"
import NavHeroSection from "./components/NavHeroSection"
import "@fortawesome/fontawesome-free/css/all.min.css";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import './App.css'


function App() {


  return (
    <>
      <NavHeroSection />
      <About />
      <Education />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
