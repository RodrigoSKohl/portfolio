import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { scroller } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#51c9c7]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gabriel</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a student of computer science and programming, currently focused on developing responsive web applications.</p>
        <div>
          <button
            onClick={() => scroller.scrollTo('about', {
              duration: 1000,
              delay: 100,
              smooth: true,
              itemId: 'about',
              offset: 50,
            })}
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-[#51c9c7] hover:bg-[#51c9c7]'>
            View More
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home
