import React from 'react'
// import ScrollContainer from 'react-indiana-drag-scroll'
function Tutorcards(props) {
    return (
        <>
            {props.data.id == 1 &&
                
                <div className='maincard w-auto h-auto border-2 rounded-[16px]'>
                    <div className='flex gap-3'>
                        <div className='roundimg w-[71px] h-[71px]  rounded-full mt-5 ml-5'>
                        </div>
                        <div className='flex flex-col items-center mt-7'>
                            <h1 className='font-semibold text-[28px] leading-[33.6px]'>
                                {props.data.name}
                            </h1>
                            <p className='cardpt font-medium text-[16px] leading-[19.2px]'>
                                {props.data.degree}
                            </p>
                        </div>
                    </div>
                    <button className='cardbtn w-[109px] h-[29px] ml-4 rounded-[4px] mt-3 font-medium text-[14px] leading-[16.8px] text-white'>
                        {props.data.subject}

                    </button>
                    <button className='cardbtn w-[71px] h-[29px] mt-3 ml-3 font-medium text-[14px] leading-[16.8px] text-white rounded-[4px]'>
                        {props.data.secondSubject}
                    </button>
                    <img className='ml-4 mt-3' src={props.data.src} alt="" />
                    <h2 className='cardheading ml-3 mt-2 font-bold text-[24px] leading-[28.8px]'>
                        {props.data.dollar}
                    </h2>
                    <p className='cardpara font-medium text-[17px] leading-[23.5px] ml-3 mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl sodales rhoncus felis. Cursus vel nunc imperdiet ac eget at. Habitant pellentesque molestie aliquam in urna, mauris vitae posuere nec.
                    </p>
                    <button className='cardtbtn w-[170px] h-[50px]  rounded-[8px] font-medium text-[18px] leading-[23.5px] text-white mt-8 ml-3'>
                        Book Trial
                    </button>
                    <button className='cardfbtn w-[170px] h-[50px]  rounded-[8px] font-medium text-[18px] leading-[23.5px] text-white mt-8 ml-3 border-2'>
                        Message
                    </button>
                

                        </div>

            }
            {
                props.data.id == 2 &&
                
                <div className='maincard w-auto h-auto border-2 rounded-[16px]'>
                    <div className='flex gap-3'>
                        <div className='roundimg w-[71px] h-[71px]  rounded-full mt-5 ml-5'>
                        </div>
                        <div className='flex flex-col items-center mt-7'>
                            <h1 className='font-semibold text-[28px] leading-[33.6px]'>
                                {props.data.name}
                            </h1>
                            <p className='cardpt font-medium text-[16px] leading-[19.2px]'>
                                {props.data.degree}
                            </p>
                        </div>
                    </div>
                    <button className='cardbtn w-[109px] h-[29px] ml-4 rounded-[4px] mt-3 font-medium text-[14px] leading-[16.8px] text-white'>
                        {props.data.subject}

                    </button>
                    <button className='cardbtn w-[92px] h-[29px] mt-3 ml-3 font-medium text-[14px] leading-[16.8px] text-white rounded-[4px]'>
                        {props.data.secondSubject}
                    </button>
                    <button className='cardbtn w-[83px] h-[29px] mt-3 ml-3 font-medium text-[14px] leading-[16.8px] text-white rounded-[4px]'>
                        {props.data.thirdSubject}
                    </button>

                    <img className='ml-4 mt-3' src={props.data.src} alt="" />
                    <h2 className='cardheading ml-3 mt-2 font-bold text-[24px] leading-[28.8px]'>
                        {props.data.dollar}
                    </h2>
                    <p className='cardpara font-medium text-[17px] leading-[23.5px] ml-3 mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl sodales rhoncus felis. Cursus vel nunc imperdiet ac eget at. Habitant pellentesque molestie aliquam in urna, mauris vitae posuere nec.
                    </p>
                    <button className='cardtbtn w-[170px] h-[50px]  rounded-[8px] font-medium text-[18px] leading-[23.5px] text-white mt-8 ml-3'>
                        Book Trial
                    </button>
                    <button className='cardfbtn w-[170px] h-[50px]  rounded-[8px] font-medium text-[18px] leading-[23.5px] text-white mt-8 ml-3 border-2'>
                        Message
                    </button>

                        </div>

                    }
    </>



    )
}

export default Tutorcards
