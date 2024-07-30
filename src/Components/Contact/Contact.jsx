import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container mx-auto py-5  text-center">
        <div className='my-6 '>
          <h2 className='text-3xl font-extrabold'>CONTACT SECTION</h2>
          <div className='mt-4 flex justify-center items-center'>
            <div className='w-16 h-[4px] bg-black '></div>
            <i className="fa-solid fa-star mx-2 text-blabg-black"></i>
            <div className='w-16 h-[4px] bg-black '></div>
          </div>
        </div>
      </div>


      <div className="container w-[800px] mx-auto">
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">

          <div className="mb-8">
            <input className="border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" userName" />
          </div>

          <div className="mb-8">
            <input className=" appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userAge" type="number" placeholder="userAge" />
          </div>

          <div className="mb-8">
            <input  className="border-b-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="userEmail"  type="email"  placeholder="userEmail"  />
          </div>

          <div className="mb-8">
            <input className="border-b-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="userPassword" type="password"  placeholder="userPassword" />
          </div>

          <div className="flex items-center justify-between">
            <button  className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="button" > send Message </button>
          </div>

        </form>
      </div>

    </>


  )
}
