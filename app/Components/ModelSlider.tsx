"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'

const ModelSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              centerMode: false,
            }
          }
        ],
      };

  return (
       <div className='w-full m-auto  h-[60vh] flex justify-center items-center'>
         <div className='w-3/4 m-auto p-2  relative   '>
            <div >
            <Slider {...settings}>
                {data.map((d)=> (
                    <div className='relative top-0'>
                    <div className='  h-[350px]   flex hover:scale-105 transition duration-150 ease-out hover:ease-in
                     flex-col justify-between items-center p-3 rounded-md'>

                        <div className='font-mono font-bold w-full h-[15%] flex
                        items-center     text-xl ml-3'><h1>{d.name}</h1></div>
                        <div className='w-full h-[30vh] relative top-4  '><img src={d.img} alt="" /></div>
                        <div className='font-mono font-thin w-full h-[15%]  flex
                        items-start  flex-col 
                        text-md underline hover: ml-3' >
                            <h1>CONFIGURE & BUY</h1>
                            <h1>DISCOVER MORE</h1>
                        </div>
                    
                    </div></div>
                ))}</Slider>
            </div>
        </div>
       </div>
      
    
  )
}


const data =[

    {
      name: "TONALE HYBRID",
      img: `https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/AR-Menu-Tonale_Ti.png`
  
    },
    {
      name: "STELVIO",
      img: `https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/AR-Menu-Stelvio-MCA-TI.png`
  
    },
    {
      name: "STELVIO GUADRIFOGLIO",
      img: `https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/june-2023/AR-Home-Trim-Figurini-Stelvio-QV-MCA.png`
  
    },
    {
        name: "GIULIA GUADRIFOGLIO",
        img: `https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/june-2023/AR-Home-Trim-Figurini-Giulia-QV-MCA.png`
    
      },
      {
        name: "GIULIA",
        img: `https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/AR-Menu-GIULIA-MCA-TI.png`
    
      },
    
    
    
    
    
  ]

export default ModelSlider
