import React from 'react'
import Navbar from '../components/Navbar'
import Img from "../images/Layer 1 2.png";

function Home() {
    return (
        <>
            <div className='bg-1 lg:h-[780px] p-1 border-box  '>
                <Navbar />
                <div className='lg:flex lg:justify-around'>
                <div className='h-auto w-auto'>
                <h1 className='text-[30px]  sm:text-[50px] font-bold lg:text-[72px] lg:leading-[86.4px] text-white lg:w-[531px] pt-[91px]'>
                    Not sure which tutor?
                </h1>
                <p className=' sm:text-[30px] text-white lg:text-[24px] lg:leading-[28.8px] lg:w-[500px] mt-5'>
                    SPMC is also a great opportunity for you to find your dream tutor. Our SPMC is ran by our tutors. You can book a free session with your dream tutor that you find at SPMC.

                    Book your free session with your dream tutor.
                </p>
                <button className='freebtn w-[249px] text-white h-[60px] mt-8 font-medium text-[20px] leading[24px] rounded-[8px]'>
                    Book Free Session
                    </button>
                </div>
                <div className='h-auto w-auto'>
                    <img className='w-[450px] py-[50px] lg:h-[734px]' src={Img} alt="" />
                    </div>
                </div>
                
            </div>
            
        </>
    )
}

export default Home
