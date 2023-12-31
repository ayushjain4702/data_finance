import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALTICS DASHBOARD</p>
                <h1 className='font-bold md:text-3xl sm:text-2xl text-xl py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto fugiat molestias expedita adipisci, pariatur magni labore assumenda debitis nam inventore saepe aliquid, velit doloremque fugit soluta. Dicta, iure vel. Consequatur?</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics