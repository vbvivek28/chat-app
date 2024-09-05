import React,{useEffect, useState} from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {PiUserCircle} from "react-icons/pi"
import Avatar from "../components/Avatar";
function CheckPassword() {
  
  const [data,setData]= useState({
    password:""
  })

const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  if (location  && !location?.state?.name) {
    navigate('/email');
  }
}, [location]);

  const handleOnChange=(e)=>{
    const {name,value}= e.target

    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }


    const handleSubmit = async(e)=>{
      e.preventDefault()
      e.stopPropagation()

      const URL=`${import.meta.env.VITE_BACKEND_URL}/api/password`
      try {
        const response= await axios.post(URL,{userId: location?.state?._id,password:data.password}) 
        toast.success(response.data.message)
        if(response.status == 200)
        {
          setData(
            {
              password:""
            }
          )
          navigate('/')
        }
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    

    }

  return (<>
    <div className="mt-5">
      <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">

<div className="w-fit mx-auto mb-2 flex justify-center items-center flex-col">
  {
    // <PiUserCircle size={80}/>
  }

<Avatar width={70} height={70} name={location?.state?.name} imageUrl={location?.state?.profile_pic}/>
<h2 className="font-semibold text-lg mt-1 p-2">{location?.state?.name} </h2>
</div>
        <h3>Welcome to Chat app!</h3>

        <form className="grid gap-4 mt-5 " onSubmit={handleSubmit}>
        
            <div className="flex flex-col gap-1">
            <label htmlFor="password">Enter Password:</label> 
            <input 
             type='password'
             id='password'
             name='password'
             placeholder="enter your password"
             className="bg-slate-100 px-2 py-1 focus:outline-primary"
             value={data.password}
             onChange={handleOnChange}
             required
           /> 
            </div>
              <button className="bg-primary hover:bg-violet-800 text-lg px-4 py-1 rounded mt-2 font-bold text-white leading-relaxed ">Submit</button>
        </form>
        <p className="my-3 text-center">New User ? <Link to={"/forgot-password"} className="hover:text-primary font-semibold">Forgot Password ?</Link></p>
      </div>
    </div>
    </>
  )
}


export default CheckPassword