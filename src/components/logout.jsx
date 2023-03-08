import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
      const Navigation = useNavigate();

    
   useEffect(() =>{
    
    const token = localStorage.getItem("token");
    if(!token){
    Navigation("/login");
    }
   else    
    {
      localStorage.removeItem("token")
      toast.error("Logout Successfully", 3000);
      Navigation("/")
    }
    


  })

  return (
    <div>logout</div>
  )
}

export default Logout