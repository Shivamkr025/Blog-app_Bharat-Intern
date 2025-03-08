import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import BlogList from '../Components/BlogList'
import Footer from '../Components/Footer'
import Image from '../assets/banner05.jpg'

function Blog() {
  return (
    <div>
      <Navbar/>
      <HeroSection bannerImage={Image} />
      <BlogList/>
      <Footer/>
    </div>
  )
}

export default Blog
