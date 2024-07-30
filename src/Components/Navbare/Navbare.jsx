import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbare() {

  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const toggleMenue = () => {
    setIsMenueOpen(!isMenueOpen);
  }

  // console.log(isMenueOpen);

  return (
    <nav className='sticky top-0 left-0 bg-gray-800 p-6 rounded-t-lg z-50 '>
      <div className="container mx-auto flex items-center justify-between">

        <Link to='/start' className="text-white text-3xl font-semibold cursor-pointer hover:text-white drop-shadow-lg hover:text-[rgba(55,248,255,0.83)] duration-200  ">Start Framework</Link>

        <div className='md:hidden'>
          <button onClick={toggleMenue} className='text-white bg-inherit'>
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>
        </div>

        <ul className='hidden md:flex space-x-4'>
          <li> <NavLink to="/about" className='text-white font-bold  focus:bg-emerald-500 focus:p-2 focus:rounded-lg hover:text-white transition-all duration-300'>ABOUT</NavLink> </li>
          <li> <NavLink to="/portfolio" className='text-white font-bold  focus:bg-emerald-500 focus:p-2 focus:rounded-lg hover:text-white duration-300'>PORTFOLIO</NavLink> </li>
          <li> <NavLink to="/contact" className='text-white font-bold  focus:bg-emerald-500 focus:p-2 focus:rounded-lg hover:text-white duration-300'>CONTACT</NavLink> </li>
        </ul>
      </div>
      {/* Mobile Menue */}
      {isMenueOpen ? (<ul className='flex-col md:hidden '>
        <li className='py-2'> <NavLink to="/about" className='text-white font-bold  focus:bg-emerald-500 focus:p-2 focus:rounded-lg hover:text-white transition-all duration-300'>ABOUT</NavLink> </li>
        <li className='py-2'> <NavLink to="/portfolio" className='text-white font-bold  focus:bg-emerald-500 focus:p-2 focus:rounded-lg hover:text-white duration-300'>PORTFOLIO</NavLink> </li>
        <li className='py-2'> <NavLink to="/contact" className='text-white font-bold  focus:bg-emerald-500 focus:p-2 focus:rounded-lg hover:text-white duration-300'>CONTACT</NavLink> </li>
      </ul>)
        : null}
    </nav>
  )
}
