import React from 'react'
import Img9 from "../images/image 13.png"

function Footer() {

    return (
        <>
            <div className='w-full h-auto py-[10px]  flex flex-wrap flex-col justify-evenly  lg:flex lg:justify-evenly lg:flex-row'>
                <div className=' flex flex-col items-center  lg:flex lg:flex-col  w-[100%] lg:w-[50%] '>

                    <img src={Img9} alt="" />
                    <p className='  text-[15px] w-[280px] sm: lg:w-[322px] mt-5 font-medium lg:text-[18px] lg:leading-[27px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl sodales rhoncus felis. Cursus vel nunc imperdiet ac eget at. Habitant pellentesque molestie aliquam in urna, mauris vitae posuere nec.
                    </p>
                    <h2 className='fotertext font-medium text-[16px] leading-[24px] mt-16 ]'>
                        All Rights Reserved © renesistech.com
                    </h2>
                </div>

                <div className='w-[100%] pt-10 flex flex-row flex-wrap gap-5  sm:flex sm:justify-evenly  lg:w-[50%] lg:flex lg:justify-evenly'>
                    <ul className='pt-5'>
                        <h1 className='font-bold text-[18px] leading-[21.6px] text-black'>Company</h1>
                        <li className='mt-6 font medium text-[18px] leading-[21.6px]'>About us</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>

                <ul className='pt-5'>
                        <h1 className='font-bold text-[18px] leading-[21.6px] text-black'>Courses</h1>
                        <li className='mt-6 font medium text-[18px] leading-[21.6px]'>Biology</li>
                        <li>Physics</li>
                        <li>Mathematics</li>
                        <li>Statistics</li>
                        <li>Chemistry</li>

                    </ul>

                <ul className='pt-5'>
                        <h1 className='font-bold text-[18px] leading-[21.6px] text-black'>Locations</h1>
                        <li className='mt-6 font medium text-[18px] leading-[21.6px]'>Canada</li>
                        <li>USA</li>
                        <li>Europe</li>

                    </ul>

                <ul className='pt-5'>
                        <h1 className='font-bold text-[18px] leading-[21.6px] text-black'>Policy</h1>
                        <li className='mt-6 font medium text-[18px] leading-[21.6px]'>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>User Agreement</li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
