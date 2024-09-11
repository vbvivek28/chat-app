import React from 'react'
import { IoChatbubbleEllipses } from 'react-icons/io5'
function Sidebar() {
  return (
    <div className='w-full h-full'>
        <div className='bg-slate-200 w-12 h-full rounded-tr-lg rounded-br-lg py-5'>
           <div className='w-12 h-121 flex justify-center items-center cursor-pointer hover:bg-slate-200' title='chat'>
            <IoChatbubbleEllipses 
            size={25} />
            </div> 
        </div>
    </div>
  )
}

export default Sidebar