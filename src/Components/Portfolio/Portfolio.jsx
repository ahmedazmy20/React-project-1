import React from 'react'
import img1 from '../Images/poert1.png'
import img2 from '../Images/port2.png'
import img3 from '../Images/port3.png'

export default function Portfolio() {
  return (
    <>
      <section className='portifolio'>
        <div className="container mx-auto py-5  text-center">

          <div className='my-6 '>
            <h2 className='text-3xl font-extrabold'>PORTIFOLIO COMPONENT</h2>
            <div className='mt-4 flex justify-center items-center'>
              <div className='w-16 h-[4px] bg-black '></div>
              <i className="fa-solid fa-star mx-2 text-blabg-black"></i>
              <div className='w-16 h-[4px] bg-black '></div>
            </div>
          </div>

          <div className='grid gap-10 container lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            
            <div className=' group cursor-pointer'>
              <div className='relative '>
                <img src={img1} className='w-full rounded-lg' alt="image1"></img>
                <div className='rounded-lg group-hover:opacity-1 opacity-0 group-hover:opacity-100 duration-500 bg-emerald-500 bg-opacity-70 flex items-center justify-center absolute inset-0'>
                  <i className="fa-solid fa-plus fa-4x text-white"></i>
                </div>
              </div>
            </div>
            
            <div className=' group cursor-pointer'>
              <div className='relative '>
                <img src={img2} className='w-full rounded-lg' alt="image1"></img>
                <div className='rounded-lg group-hover:opacity-1 opacity-0 group-hover:opacity-100 duration-500 bg-emerald-500 bg-opacity-70 flex items-center justify-center absolute inset-0'>
                  <i className="fa-solid fa-plus fa-4x text-white"></i>
                </div>
              </div>
            </div>
            
            <div className=' group cursor-pointer'>
              <div className='relative '>
                <img src={img3} className='w-full rounded-lg' alt="image1"></img>
                <div className='rounded-lg group-hover:opacity-1 opacity-0 group-hover:opacity-100 duration-500 bg-emerald-500 bg-opacity-70 flex items-center justify-center absolute inset-0'>
                  <i className="fa-solid fa-plus fa-4x text-white"></i>
                </div>
              </div>
            </div>

            <div className=' group cursor-pointer'>
              <div className='relative '>
                <img src={img3} className='w-full rounded-lg' alt="image1"></img>
                <div className='rounded-lg group-hover:opacity-1 opacity-0 group-hover:opacity-100 duration-500 bg-emerald-500 bg-opacity-70 flex items-center justify-center absolute inset-0'>
                  <i className="fa-solid fa-plus fa-4x text-white"></i>
                </div>
              </div>
            </div>

            <div className=' group cursor-pointer '>
              <div className='relative '>
                <img src={img1} className='w-full rounded-lg' alt="image1"></img>
                <div className='rounded-lg group-hover:opacity-1 opacity-0 group-hover:opacity-100 duration-500 bg-emerald-500 bg-opacity-70 flex items-center justify-center absolute inset-0'>
                  <i className="fa-solid fa-plus fa-4x text-white"></i>
                </div>
              </div>
            </div>

            <div className=' group cursor-pointer'>
              <div className='relative '>
                <img src={img2} className='w-full rounded-lg' alt="image1"></img>
                <div className='rounded-lg group-hover:opacity-1 opacity-0 group-hover:opacity-100 duration-500 bg-emerald-500 bg-opacity-70 flex items-center justify-center absolute inset-0'>
                  <i className="fa-solid fa-plus fa-4x text-white"></i>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
