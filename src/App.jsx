import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import AboutUs from './components/About'
import Sustainability from './components/Sustain'
import ContactPage from './components/Contact'
import BlogNews from './components/Blog'
import Partnership from './components/Partnership'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <Sustainability/>
    <Partnership/>
    <BlogNews/>
    <ContactPage/>
    <Footer/>
    </>
  )
}

export default App
