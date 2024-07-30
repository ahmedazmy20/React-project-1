import React from 'react'
import Navbare from '../Navbare/Navbare'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Navbare/>
    <Outlet/>
    <Footer/>
    </>
  )
}
