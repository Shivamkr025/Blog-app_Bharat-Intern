import React from 'react'
import Navbar from '../Components/Navbar'
import AboutMe from '../Components/About'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Image from '../assets/banner06.jpg'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroSection bannerImage={Image}/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default About
