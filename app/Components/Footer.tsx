import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 flex justify-center items-center'>
    <div className='w-[92%] h-[80vh] bg-gray-800 flex 
    justify-around items-center flex-col '>
        <div className='w-full h-[10vh]  border-b-[1px] flex items-center justify-end'>
          <h1 className='text-white text-[4vh] font-serif 
          font-bold flex 
          justify-center items-center'>follow us &nbsp;
          <CiFacebook />
          <CiInstagram /> 
          <CiLinkedin />
          <CiYoutube />
          <CiTwitter /> </h1>
          
        </div>
        <div className='w-full  flex  justify-center items-center
                   h-[27vh]   text-white'>
                    <div className='h-[95%] w-[100%] flex gap-10    justify-center items-center'>
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

    </div>
    </div>)
}

export default Footer
