import React from 'react'
import Header from './Components/Header'
import SliderPage from './Components/SliderPage'
import Type from './Components/Type'
import News from './Components/News'
import Footer from './Components/Footer'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col 
    items-center justify-start h-auto bg-black'>
      <Header />
  <SliderPage />
      <Type />
      <News />
      <Footer />
      
      
      
    </div>
  )
}

export default page
