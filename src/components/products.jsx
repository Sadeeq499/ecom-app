import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './cards'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

function Products() {

  const [products, setProducts] = useState([])
  const Navigation = useNavigate();


  useEffect(() => {
  
    
    const token = localStorage.getItem("token");
    if(!token) {
    toast.error("Please Login First");
    
    Navigation("/login");
    }

    axios.get('https://express-ec.herokuapp.com/products/',{
      headers: {
        token: token
    }
  })
      .then(res => {
        // console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => { 
        console.log(err.response.data)
        // toast.error(err.response.data, 3000);
      })  
    
  }, [])

  return (
    <div>
      <h1>Products</h1>
      {/* show in table product title and price*/}

{products.length > 0 && products.map((product) => {
        return (
          <div>
            <Link to={"/product/" + product.id}>{product.title}</Link>
            </div>
        )
      })
}




    </div>
  )
}

export default Products