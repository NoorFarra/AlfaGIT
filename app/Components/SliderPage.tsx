"use client"

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { motion } from "framer-motion"

const SliderPage = () => {

  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };


  return (
   
    <div className='w-full h-full'>
       <motion.div
    initial={{
     opacity:0,
     y: 80,
    }}
    whileInView={{
     opacity:1,
    y: 0,
    }}
    transition={{
     duration: 0.25,
    }}
>
      <Slider {...settings}>
      <div className='w-full h-[100vh]  bg-center   bg-cover'>
      <div className='w-full h-full bg-none flex   sm:items-end  '>
        <div className='w-full sm:h-[35vh] h-full flex flex-col sm:flex-row sm:mb-5  justify-center items-center '>
          <div className='sm:w-1/2 w-full h-full flex flex-col relative sm:top-0 top-[13vh] sm:justify-center items-start gap-1  '>
            <h1 className='text-white font-bold font-mono text-[6vh] sm:text-[7vh]  ml-10'>ALFA ROMEO 
            <br /> <span className='relative bottom-6'>STELVIO QUADRIOGLIO </span></h1>
            <p className='text-white ml-10 relative bottom-6 text-md font-mono font-bold'>The very essence of power</p>
          </div>
          <div className='sm:w-1/2 w-full sm:h-full flex flex-col sm:flex-row sm:justify-end p-7 sm:mr-6 items-center gap-1  sm:gap-3'>
          
            <button className='bg-white text-xs font-mono cursor-pointer z-20  h-[7vh] w-full sm:w-[24vh]'>CONFIGURE & BUY</button>
            <button className='bg-none border border-spacing-1 text-white text-xs font-mono cursor-pointer z-20 w-full h-[7vh] sm:w-[24vh]'>DISCOVER MORE</button>
          
          
          
          </div>
        </div>
       </div>
      </div>
    
      <div className='w-full h-[100vh]  bg-center  bg-cover'>
      <div className='w-full h-full bg-none flex   sm:items-end  '>
        <div className='w-full sm:h-[35vh] h-full flex flex-col sm:flex-row sm:mb-5  justify-center items-center '>
          <div className='sm:w-1/2 w-full h-full flex flex-col relative sm:top-0 top-[13vh] sm:justify-center items-start gap-4  '>
            <h1 className='text-white font-bold font-mono text-[6vh] sm:text-[7vh]  ml-10'>FREE2MOVE ESOLUTIONS
            </h1>
            <p className='text-white ml-10 relative bottom-6 text-md font-mono font-bold'>charging freedom</p>
          </div>
          <div className='sm:w-1/2 w-full sm:h-full flex flex-col sm:flex-row sm:justify-end p-7 sm:mr-6 items-center gap-1  sm:gap-3'>
          
            <button className='bg-white text-xs font-mono cursor-pointer z-20  h-[7vh] w-full sm:w-[24vh]'>DISCOVER MORE</button>
            
          
          
          
          </div>
        </div>
       </div>
      </div>
    
      <div className='w-full h-[100vh]  bg-center  bg-cover'>
      <div className='w-full h-full bg-none flex   sm:items-end  '>
        <div className='w-full sm:h-[35vh] h-full flex flex-col sm:flex-row sm:mb-5  justify-center items-center '>
          <div className='sm:w-1/2 w-full h-full flex flex-col relative sm:top-0 top-[13vh] sm:justify-center items-start gap-1  '>
            <h1 className='text-white font-bold font-mono text-[6vh] sm:text-[7vh]  ml-10'>NEW
            <br /> <span className='relative bottom-6'>ALFA ROMEO <br/><span className='relative bottom-6'> MILANO</span> </span> </h1>
      
          </div>
          <div className='sm:w-1/2 w-full sm:h-full flex flex-col sm:flex-row sm:justify-end p-7 sm:mr-6 items-center gap-1  sm:gap-3'>
          
          <button className='bg-white text-xs font-mono cursor-pointer z-20  h-[7vh] w-full sm:w-[24vh]'>DISCOVER MORE</button>
          
          
          
          </div>
        </div>
       </div>
      </div>
    
      <div className='w-full h-[100vh]  bg-center  bg-cover'>
      <div className='w-full h-full bg-none flex   sm:items-end  '>
        <div className='w-full sm:h-[35vh] h-full flex flex-col sm:flex-row sm:mb-5  justify-center items-center '>
          <div className='sm:w-1/2 w-full h-full flex flex-col relative sm:top-0 top-[13vh] sm:justify-center items-start gap-1  '>
            <h1 className='text-white font-bold font-mono text-[6vh] sm:text-[7vh]  ml-10'>ALFA ROMEO 
            <br /> <span className='relative bottom-6'>GIULIA QUADRIOGLIO </span></h1>
            <p className='text-white ml-10 relative bottom-6 text-md font-mono font-bold'>The very essence of power</p>
          </div>
          <div className='sm:w-1/2 w-full sm:h-full flex flex-col sm:flex-row sm:justify-end p-7 sm:mr-6 items-center gap-1  sm:gap-3'>
          
            <button className='bg-white text-xs font-mono cursor-pointer z-20  h-[7vh] w-full sm:w-[24vh]'>CONFIGURE & BUY</button>
            <button className='bg-none border border-spacing-1 text-white text-xs font-mono cursor-pointer z-20 w-full h-[7vh] sm:w-[24vh]'>DISCOVER MORE</button>
          
          
          
          </div>
        </div>
       </div>
      </div>
    
      </Slider>
      </motion.div>
    </div>
    
  )
}

export default SliderPage
