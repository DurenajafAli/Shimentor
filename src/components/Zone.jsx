import React from 'react'
import Zonecards from './Zonecards'
import Img6 from "../images/Mask Group.png"

function Zone() {
    return (
        <>
            <div className='w-full  mt-10'>
                <h1 className='mt-10 font-bold text-[40px] leading-[48px] text-center'>
                    Make the world your comfort zone
                </h1>
            </div>
            <div className='grid grid-cols-1 sm:  md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 px-[20px]'>
                <Zonecards data={{
                    src: Img6,
                    heading:"Expert Tutors",
                }} />
                <Zonecards data={{
                    src: Img6,
                    heading: "Verified Tutors",
                }} />
                <Zonecards data={{
                    src: Img6,
                    heading: "Learn Anytime",
                }} />
            </div>
        </>
    )
}

export default Zone
