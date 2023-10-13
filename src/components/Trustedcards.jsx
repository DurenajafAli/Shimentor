import React from 'react'
import Img5 from "../images/unsplash_j3lf-Jn6deo.png"
import Img7 from "../images/Group 5886.png";

function Trustedcards() {
    return (
        <>
            <div className='maintrust w-auto h-auto border-2 mt-10 rounded-[16px]'>

            <div className='flex'>
                <div className='w-[61px] h-[61px] rounded-full ml-5 mt-5'>
                    <img src={Img5} alt="" />
            </div>
                    <div className='flex flex-col mt-6 ml-5'>
                        <h1 className='font-semibold text-[24px] leading-[28.8px] w-[166px]'>
                            Martin Stanton
                        </h1>
                        <img className='w-[123px] h-[14px] mt-1' src={Img7} alt="" />
                </div>
                </div>
                <p className='ml-5 mt-5 font-medium text-[16px] leading-[23.5px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl sodales rhoncus felis. Cursus vel nunc imperdiet ac eget at. Habitant pellentesque molestie aliquam in urna, mauris vitae posuere nec.
                </p>
            </div>

        </>
    )
}

export default Trustedcards
