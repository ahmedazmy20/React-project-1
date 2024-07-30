import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white py-16 relative '>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 sm:gap-10 px-4 text-center py-7 mb-12'>
                <div className='col-span-1'>
                    <h2 className='font-bold text-2xl mb-3'>LOCATION</h2>
                    <p >2215 John Danial Drive</p>
                    <p className='text-sm mt-3 font-semiboldbold'>Clark MO 65243</p>
                </div>
                <div className='col-span-1'>
                    <h2 className='font-bold text-2xl mb-3'>AROUND THE WEB</h2>
                    <div className="icons w-52 mx-auto flex justify-between mb-3">
                        <div className='p-2 border-2 rounded-full flex items-center justify-center'>
                        <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className='p-2 border-2 rounded-full flex items-center justify-center'>
                        <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className='p-2 border-2 rounded-full flex items-center justify-center'>
                        <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='p-2 border-2 rounded-full flex items-center justify-center'>
                        <i className="fa-solid fa-globe"></i>
                        </div>
                    
                    </div>
                </div>
                <div className='col-span-1'>
                    <h2 className='font-bold text-2xl mb-3'>ABOUT FREELANCER</h2>
                    <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>


            </div>
            <div className='bg-slate-950 absolute right-0 left-0 bottom-0 py-6 text-center'>
                <span>Copyright © Your Website 2024</span>
            </div>
        </footer>
    )
}
