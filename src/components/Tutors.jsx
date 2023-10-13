import React from 'react'
import Tutorcards from './Tutorcards'
import Img4 from "../images/Group 5886.png";

function Tutors() {
    return (
        <>
            <div className='w-full h-auto '>
                <h1 className='font-bold text-[40px] leading-[48px] text-center mt-8'>
                    Top Tutors
                </h1>
            </div>
            <div className='mt-20  w-auto h-auto grid grid-cols-1 gap-5 sm:grid sm: md:grid-cols-2 lg:grid-cols-3 px-[20px] '>
                <Tutorcards  data={{
                    id:"1",
                    src: Img4,
                    name: "Nolan Rosser",
                    degree: "Master in Physics",
                    subject: "Mathematics",
                    secondSubject:"Physics",
                    dollar: "$28 / hr"
                }} />
                <Tutorcards data={{
                    id:"1",
                    src: Img4,
                    name: "Ashlynn Saris",
                    degree: "Master in Biology",
                    subject: "Biology",
                    secondSubject: "Zoology",
                    dollar: "$17 / hr"
                }} />

                <Tutorcards data={{
                    id:"2",
                    src: Img4,
                    name: "Angel Aminoff",
                    degree: "PHD  in Mathematics",
                    subject: "Mathematics",
                    secondSubject: "Economics",
                    thirdSubject: "Statistics",
                    dollar: "$19 / hr"
                }} />
            </div>
        </>
    )
}

export default Tutors
