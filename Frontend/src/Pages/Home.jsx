import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import LatestBlogs from '../Components/LatestBlog'
import HomeAbout from '../Components/HomeAbout'
import Footer from '../Components/Footer'
import Image from '../assets/banner10.jpg'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection  bannerImage={Image}/>
      <LatestBlogs/>
      <HomeAbout/>
      <Footer/>
    </div>
  )
}

export default Home
