import React from 'react'
import Img3 from "../images/image 13.png";

function Academic() {
    return (
      <>
            <div className='flex justify-evenly flex-col   sm: w-full h-auto  lg:flex lg:justify-evenly lg:flex-row px-[20px] mt-10 '>
                <div className='w-auto h-auto'>
                    <h1 className='  sm:text-[45px] lg:w-[684px] lg:h-[216px] font-bold lg:text-[60px] lg:leading-[72px]'>
                        High school is hard Getting into a good university is even harder
                    </h1>
                    <p className='flex font-medium lg:text-[24px] lg:leading-[28.8px] mt-5'>
                        Academic Success just got a bit easier with
                        <span>
                            <img className='w-[143px] h-[39px] mt-[-2px]' src={Img3} alt="" />
                        </span>
                    </p>
                    <button className='btn1  w-[100px] h-[40px] sm: lg:w-[250px] lg:h-[60px]  rounded-[12px] text-white mt-5 font-medium lg:text-[20px] lg:leading-[24px]'>
                        Learn More
                    </button>

                </div>
                <div className='bgimg w-full h-[400px] sm:  md:mt-8 lg:w-[40%] lg:h-[400px] '>

                </div>
      
            </div>
        </>
  )
}

export default Academic
