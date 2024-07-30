import React from 'react'
import img from '../../assets/avataaars.svg'


export default function Start() {
  
  return (
    <>
    <section className='start bg-teal-500 h-[80vh] flex items-center justify-center'>
       <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center ">
            <img className='w-60' src={img}  alt="AvatarImage" />
            <div className='mt-3 text-white'>
              <h2 className='text-3xl font-extrabold'>START FRAMEWORK</h2>
              <div className='mt-4 flex justify-center items-center'>
                <div className='w-14 h-[3px] bg-white '></div>
                <i className="fa-solid fa-star mx-2 text-white"></i>
                <div className='w-14 h-[3px] bg-white '></div>
              </div>
              <div className='mt-3'>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
       </div>
    </section>
    </>
  )
}
