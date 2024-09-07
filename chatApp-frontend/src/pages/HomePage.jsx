import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import { logout, setUser } from '../redux/userSlice.js'
import Sidebar from "../components/Sidebar.jsx";
function HomePage() {
const user = useSelector(state => state.user)
const dispatch = useDispatch()
const navigate = useNavigate()

console.log("redux user" , user)

  const fetchUserDetails = async()=>{
    try {
       const URL = `${import.meta.env.VITE_BACKEND_URL}/api/user-details`
       const response = await axios.get(URL,{withCredentials:true}) 
       console.log(response) 
       dispatch(setUser(response.data.data))

         if(response.data.logout){
          dispatch(logout())
          navigate("/email")
       }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    fetchUserDetails();
  },[])

  return (
    <>
    <div className=" grid lg:grid-cols-[320px,1fr] h-screen max-h-screen">
    <section className="bg-white">
      <Sidebar />

    </section>
    <section>
        <Outlet/>
    </section>
  </div>
    </>
  )
}

export default HomePage;