import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  checkToken from './auth'
function Product() {

    const params = useParams();
    const [product, setProduct] = useState({})
    const Navigation = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if(!token) {
        toast.warning("Already Logout",3000);
      Navigation("/login");
    }

    
        axios.get("https://express-ec.herokuapp.com/product?id=" + params.id, {
            headers: {
                token: token
                }})
            .then(res => {
                // console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    
          
    },[])
  


  return (
    <div>
      {/* <h2>{params.id}</h2> */}
      <h1>Product</h1>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      {/* prduct image */}
      <img src={product.image} alt=""  width={100}/>

    </div>
  )
}

export default Product