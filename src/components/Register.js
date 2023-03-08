import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios'

const Register = () => {

    const history = useNavigate();
    // hooks
    const [name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // functions
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://express-ec.herokuapp.com/user/register', {
            name,
            email,
            password
        })
        .then(res => {
            // console.log(res)
            // alert('User Registered Successfully')
            toast.success('User Registered Successfully',3000)
        }).catch(err => {
            // print exact error
            toast.error(err.response.data,3000)
            // console.log(err.response.data)
        })

    //     const data = {
    //         name,
    //         email,
    //         password
    // }
    // console.log(data)
      


    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
    
                                <Form.Control type="text"
                                 name='name'
                                 value={name}
                                  onChange={(e) =>{
                                    setUsername(e.target.value)
                                }}
                                 placeholder="Enter Your Name" 
                                 required
                                 />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control 
                                type="email"
                                 name='email'
                                 value={email} 
                                 onChange={(e) => {
                                    setEmail(e.target.value)
                                    }
                                   }
                                  placeholder="Enter email"
                                   required
                                   />
                            </Form.Group>
                                {/* this for date */}
                            {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group> */}
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control 
                                type="password"
                                 name='password'
                                 value={password}
                                 onChange={(e) => {
                                     setPassword(e.target.value)
                                        }}
                                   placeholder="Password"
                                   required />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
              
            </div>
        </>
    )
}

export default Register