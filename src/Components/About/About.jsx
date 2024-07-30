import React from 'react'

export default function About() {
  return (
    <>
      <section className='about text-center  bg-teal-500 h-[80vh] flex items-center justify-center'>
        <div className="container mx-auto ">

          <div className='mt-3 text-white'>
            <h2 className='text-3xl font-extrabold'>ABOUT COMPONENT</h2>
            <div className='mt-4 flex justify-center items-center'>
              <div className='w-16 h-[4px] bg-white '></div>
              <i className="fa-solid fa-star mx-2 text-white"></i>
              <div className='w-16 h-[4px] bg-white '></div>
            </div>
            <div className='mt-3 lg:grid lg:grid-cols-2   md:grid-cols-1  '>
              <p className='text-start ms-11 md:mb-8 md:ms-0 md:p-2 sm:ms-5 sm:mb-8'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p className='text-start ms-5 md:ms-0 md:p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
