import React from 'react'
import Trustedcards from './Trustedcards'

function Trusted() {
    return (
      <>
            <div className='w-full h-auto mt-10'>
                <h1 className='font-bold text-[40px] leading-[48px] text-center mt-10'>
                    Trusted by thousands of students & parents
                </h1>
            </div>
            <div className='grid grid-cols-1   sm: md:grid-cols-2 md:gap-5 lg:grid-cols-3 px-[20px]'>
                <Trustedcards />
                <Trustedcards />
                <Trustedcards />

            </div>
        </>
  )
}

export default Trusted
