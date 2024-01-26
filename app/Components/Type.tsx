"use client"
import { motion } from 'framer-motion'
import React from 'react'
import ModelSlider from './ModelSlider'


const Type = () => {
 

 
  
  return (
    
    <>
    <div className='w-full h-[85vh] hidden bg-gray-800 sm:flex justify-center items-center'>


      <div className=' flex justify-center  items-center   h-[90%]'>



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
            duration: 1.2
          }}
          className='h-[70vh] w-[40vh] flex flex-col justify-start items-center sm:m-6 relative left-7 '>
          <div className='bg-blue-400 bg-cover bg-center bg-quad h-[110%] w-[60%]'></div>
          <h1 className='text-[5vh]   absolute mr-4 mt-2 text-white '>STELVIO<br /> QUADRIFOGLO</h1>
          <div className='w-[45VH] h-[35vh] bg-cover bg-center bg-STEVQV relative bottom-20   '></div>

          <button className='bg-white w-full h-[10vh] font-mono text-[2vh] text-center relative bottom-6 text-gray-600'>CONFIGURE & BUY </button>
          <button className='w-full h-[10vh] font-mono text-[2vh] text-center underline underline-offset-2 text-gray-300'>DISCOVER MORE </button>
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
            duration: 1.1
          }}
          className='h-[70vh] w-[40vh]  hidden  sm:flex flex-col justify-start items-center m-6'>
          <div className='bg-blue-400 bg-cover bg-center bg-veloce h-[110%] w-[60%]'></div>
          <h1 className='text-[5vh]   absolute mr-32 mt-2 text-white '>STELVIO<br /> VELOCE</h1>
          <div className='w-[45VH] h-[35vh] bg-cover bg-center bg-STEV relative bottom-20   '></div>

          <button className='bg-white w-full h-[10vh] font-mono text-[2vh] text-center relative bottom-6 text-gray-600'>CONFIGURE & BUY </button>
          <button className='w-full h-[10vh] font-mono text-[2vh] text-center underline underline-offset-2 text-gray-300'>DISCOVER MORE </button>
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
            duration: 1
          }}
          className='h-[70vh] w-[40vh]  relative right-52 sm:right-0 flex flex-col justify-start items-center '>
          <div className='bg-blue-400 bg-cover bg-center bg-quad h-[110%] w-[60%]'></div>
          <h1 className='text-[5vh]   absolute mr-4 mt-2 text-white '>GIULIA<br /> QUADRIFOGLO</h1>
          <div className='w-[45VH] h-[35vh] bg-cover bg-center bg-GULQV relative bottom-20   '></div>

          <button className='bg-white w-full h-[10vh] font-mono text-[2vh] text-center relative bottom-6 text-gray-600'>CONFIGURE & BUY </button>
          <button className='w-full h-[10vh] font-mono text-[2vh] text-center underline underline-offset-2 text-gray-300'>DISCOVER MORE </button>
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
            duration: 0.95,
          }}
          className='h-[70vh] w-[40vh] hidden  sm:flex  flex-col justify-start items-center m-6'>
          <div className='bg-blue-400 bg-cover bg-center bg-veloce  h-[110%] w-[60%]'></div>
          <h1 className='text-[5vh]   absolute mr-32 mt-2 text-white '>GIULIA<br /> VELOCE</h1>
          <div className='w-[45VH] h-[35vh] bg-cover bg-center bg-GULE relative bottom-20    '></div>

          <button className='bg-white w-full h-[10vh] font-mono text-[2vh] text-center relative bottom-6 text-gray-600'>CONFIGURE & BUY </button>
          <button className='w-full h-[10vh] font-mono text-[2vh] text-center underline underline-offset-2 text-gray-300'>DISCOVER MORE </button>
        </motion.div>



      </div>


    </div>
    
    <div className='sm:hidden flex w-full h-full text-white bg-gray-800'>
        <ModelSlider/>
        </div>
   
    </>
  )
}

const data =[
    {
        name: "STELVIO GUADRIFOGLIO",
        img: `https://www.alfaromeo.com/content/dam/alfa/cross/homepage/trim/trim-2023/december-2023/AR-Stelvio%20QV.png`
    
      },

    
    {
      name: "STELVIO VELOCE",
      img: `https://www.alfaromeo.com/content/dam/alfa/cross/homepage/trim/trim-2023/december-2023/AR-Stelvio%20MCA%20Veloce.png`
  
    },
   
    {
        name: "GIULIA GUADRIFOGLIO",
        img: `https://www.alfaromeo.com/content/dam/alfa/cross/homepage/trim/trim-2023/june-2023/AR-Home-Trim-Figurini-Giulia-QV-MCA.png`
    
      },
      {
        name: "GIULIA VELOCE ",
        img: `https://www.alfaromeo.com/content/dam/alfa/cross/homepage/trim/trim-2023/december-2023/AR-Giulia%20MCA%20Veloce.png`
      }
    
    
    
    
    
  ]

export default Type
