import React, { useState } from 'react'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { FaUserPlus } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import Avatar from './Avatar.jsx';
import { useSelector } from 'react-redux';
import userSlice from '../redux/userSlice';
import EditUserDetails from './EditUserDetails.jsx';
function Sidebar() {
  const user=useSelector(state=> state?.user)
  const [ editUserOpen, setEditUSerOpen]=useState(false)
  return (
    <div className='w-full h-full'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between' >
         <div>
         <NavLink className={({isActive})=>`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && 'bg-slate-200'}`} title='chat'>
            <IoChatbubbleEllipses 
            size={25} />
            </NavLink> 

            <div className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200' title='chat'>
            <FaUserPlus 
            size={25} />
            </div> 
         </div>

         <div className='flex flex-col items-center'>
          <button className='mx-auto' title={user?.name }  onClick={()=>{setEditUSerOpen(true)}}>
            <Avatar width={40} height={40}
            name={user?.name}/>
          </button>
         <button title="logout" className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200' >
            <span className='-ml-1'><BiLogOut 
            size={25} /></span>
            </button>           
         </div>
        </div>

        {editUserOpen && (<EditUserDetails onClose={()=>setEditUSerOpen(false)} data={user}/>)}
    </div>
  )
}

export default Sidebar