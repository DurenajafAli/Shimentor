import React from 'react'
import Homepage from './components/Homepage'
import Academic from './components/Academic'
import Tutors from './components/Tutors'
import Zone from './components/Zone'
import Trusted from './components/Trusted'
import Shimentor from './components/Shimentor'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './Secondpage/Home'
import Spmc from './Secondpage/Spmc'

function App() {
    return (
        <>
            <div className='max-w-[120rem] mx-auto'>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/Home' element={<Home />} />
                </Routes>
                <Spmc/>

                <Academic />
                <Tutors />
                <Zone />
                <Trusted />
                <Shimentor />
                <Footer />
            </div>
        </>
    )
}

export default App
