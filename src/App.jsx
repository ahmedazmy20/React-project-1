
import './App.css'
import Navbare from './Components/Navbare/Navbare'
import Footer from './Components/Footer/Footer'
import Start from './Components/Start/Start'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {

  let router = createBrowserRouter([

    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Start/>},
      {path:'start' , element:<Start/>},
      {path:'about' , element:<About/>},
      {path:'portfolio' , element:<Portfolio/>},
      {path:'contact' , element:<Contact/>}
    ]}
  ])
  

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
      {/* <Navbare />
      <Start />
      <Footer /> */}
    </>
  )
}

export default App
