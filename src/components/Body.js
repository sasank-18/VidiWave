import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
     <Header/>
     <Sidebar/>
     <Outlet/>
     {/* <MainContainer/> */}
    </div>
  )
}

export default Body