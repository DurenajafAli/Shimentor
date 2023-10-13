import React from 'react'
function Zonecards(props) {
    return (
      <>
            <div className='zonecard rounded-[8px] w-auto h-[299px]  mt-10 '>
                <img className='ml-5 mt-5' src={props.data.src} alt="" />
                <h1 className='font-semibold text-[24.91px] leading-[29.89px] ml-5 mt-5'>
                    {props.data.heading}
                </h1>
                <p className='font-medium text-[18px]  leading-[21.6px] ml-5 mt-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl sodales rhoncus felis. 
                </p>
      
            </div>
        </>
  )
}

export default Zonecards
