"use client"

import { motion } from 'framer-motion'
import React from 'react'

const News = () => {
  return (
    <div className='w-[95%] h-[100vh] sm:h-[90vh] flex sm:flex-row flex-col sm:gap-6 justify-center px-6 sm:py-0 py-6 items-center bg-black'>

       

        <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.7
        }}
        className='sm:w-1/3 w-full h-1/3 sm:h-full  gap-12 flex sm:flex-col justify-center items.center sm:items-start'>
            <div className='w-full h-[22vh] sm:h-[47vh] bg-cover bg-center bg-map  bg-red-200 rounded-3xl'></div>
           <div> <div><h1 className='w-full text-2xl font-mono  text-white'>Find a dealer</h1>
            <p className='w-full text-lg font-mono font-bold text-white'>Find the dealer and service centers to you.</p></div>
            <button className=' text-lg font-mono underline underline-offset-1 text-white'>DISCOVER MORE</button></div>
        </motion.div>

        <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.3
        }}
        className='sm:w-1/3 w-full h-1/3 sm:h-full  gap-12 flex sm:flex-col justify-center items.center sm:items-start'>
            <div className='w-full h-[22vh] sm:h-[47vh] bg-cover bg-center bg-deal  bg-red-200 rounded-3xl'></div>
           <div> <div><h1 className='w-full text-2xl font-mono  text-white'>Find a dealer</h1>
            <p className='w-full text-lg font-mono font-bold text-white'>Find the dealer and service centers to you.</p></div>
            <button className=' text-lg font-mono underline underline-offset-1 text-white'>DISCOVER MORE</button></div>
        </motion.div>

        <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.7
        }}
        className='sm:w-1/3 w-full h-1/3 sm:h-full  gap-12 flex sm:flex-col justify-center items.center sm:items-start'>
            <div className='w-full h-[22vh] sm:h-[47vh] bg-cover bg-center bg-car  bg-red-200 rounded-3xl'></div>
           <div> <div><h1 className='w-full text-2xl font-mono  text-white'>Find a dealer</h1>
            <p className='w-full text-lg font-mono font-bold text-white'>Find the dealer and service centers to you.</p></div>
            <button className=' text-lg font-mono underline underline-offset-1 text-white'>DISCOVER MORE</button></div>
        </motion.div>

       


     


        

       
      
    </div>
  )
}


export default News
