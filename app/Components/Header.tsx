"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X} from 'lucide-react'
import ModelSlider from './ModelSlider'
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";


const Header = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    
  };

const [isOpen, setisOpen]= useState(false);

const toggleNavbar = () => {
  setisOpen(!isOpen)
}



  return (
    <>
    <div className='fixed w-full z-20'>
    <div className='w-full h-[8vh] bg-none transition duration-30 ease-out hover:ease-in   hover:bg-gray-800 flex
     sm:justify-center justify-between items-center'>
        <div className='w-[74%] h-full hidden  sm:flex justify-center items-center'>
            <div   className='h-full hidden text-sm sm:flex justify-between items-center font-mono text-white   w-[40%]'>
               <Link href={'/'}  className='group hover:underline underline-offset-1  :'> <h1>MODELS
                 <div className='w-full right-0 buttom-0  group-hover:flex absolute justify-center items-center
                  hidden h-[100vh]  bg-gray-800'> <ModelSlider />


                 </div>
                 </h1></Link>
               <Link href={'/'} className='group hover:underline underline-offset-1'> <h3>PURCHASE
               <div className='w-full right-0 buttom-0  group-hover:flex absolute justify-center items-center
                  hidden h-[47vh]  bg-gray-800'>
                    <div className='h-[95%] w-[80%] flex gap-2 mt-8  justify-center items-center'>
                      <div className='flex justify-start items-center flex-col gap-5 h-3/4 w-full'>
                      
                      <div><IoSettingsOutline size={45} /></div>
                      <h1>CONFIGURE & BUY</h1>
                      </div>

                      <div className='flex justify-start items-center flex-col gap-5 h-3/4 w-full'>
                      
                      <div><IoSearchSharp  size={45} /></div>
                      <h1>FIND IN STOCK</h1>
                      </div>

                      <div className='flex justify-start items-center flex-col gap-5 h-3/4 w-full'>
                      
                      <div><TbWorld size={45} /></div>
                      <h1>FIND A DEALER</h1>
                      </div>

                      <div className='flex justify-start items-center flex-col gap-5 h-3/4 w-full'>
                      
                      <div><SlCalender size={45} /></div>
                      <h1>BOOK A TEST DRIVE</h1>
                      </div>
                     
                    </div>
                  </div>
                </h3></Link>
               <Link href={'/'} className='group hover:underline underline-offset-1'> <h3>OUR WORLD
               <div className='w-full right-0 buttom-0  group-hover:flex absolute justify-center items-center
                  hidden h-[50vh]  bg-gray-800'>
                        <div className='h-full w-3/4 flex mt-28  '>
                          <div className='h-full w-[42vh]  flex justify-start flex-col'>
                            <h1>ALFA ROMEO BRAND</h1>
                            <p>News</p>
                            <p>Events</p>
                            <p>Awards</p>
                            <p>Magazine</p>
                            <p>Club</p>
                            <p>Merchandising</p>
                            <p>Alfa Romeo Vibes</p>
                          </div>
                          <div className='h-full w-[42vh]  flex justify-start flex-col'>
                            <h1>ALFA ROMEO BRAND</h1>
                            <p>News</p>
                            <p>Events</p>
                            <p>Awards</p>
                            
                          </div>
                          
                        </div>
                  </div>
                </h3></Link>
            </div>
            <div className='h-full w-[20%]  flex justify-center items-center bg-none'>
              <Link href={'/'} className='h-[6vh] hidden sm:flex z-20   w-[20%] bg-cover cursor-pointer rounded-2xl bg-center bg-alfalogo' >
              
              </Link>
            </div>
            <div className='h-full hidden text-sm sm:flex justify-end gap-5 items-center font-mono text-white  w-[40%]'>
            <Link href={'/'} className='hover:underline underline-offset-1'> <p>CONNECTIVITY</p></Link>
            <Link href={'/'} className='hover:underline underline-offset-1'>  <h3>HYBRID</h3></Link>
            <Link href={'/'} className='hover:underline underline-offset-1'>  <h3>CHOOSE YOUR COUNTRY</h3></Link>
            </div>


        </div>
        <Link href={'/'} className='h-9 sm:hidden ml-2 w-9 bg-cover cursor-pointer bg-center bg-alfalogo' >
              
              </Link>

              <div className='flex text-white sm:hidden mr-2'>
                <button onClick={toggleNavbar}>{isOpen ? <X /> :<Menu />}</button>
              </div>

   </div>
   {isOpen && (
    <div className='w-full h-[100vh] flex flex-col justify-center text-white items-center gap-8 bg-gray-800'>
       <div className='flex flex-col justify-center text-center gap-4'> 
       <Link href={'/'}>MODELS</Link>
        <Link href={'/'}>PURCHASE</Link>
        <Link href={'/'}>OUR WORLD</Link> </div>
       <div className='flex flex-col justify-center text-center gap-4'>
         <Link href={'/'}>CONNECTIVITY</Link>
        <Link href={'/'}>HYBRID</Link>
        <Link href={'/'}>CHOOSE YOUR COUNTRY</Link> </div>

    </div>
   )}
</div>
   </>
  )
}




export default Header
