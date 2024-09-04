import React from 'react'
import { Outlet } from "react-router-dom"
function HomePage() {
  return (
    <>
    <div>HomePage</div>
    <Outlet/>
    </>
  )
}

export default HomePage