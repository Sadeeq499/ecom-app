import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Login = () => {

    const Navigation = useNavigate();

    // hooks
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('https://express-ec.herokuapp.com/user/login', {
            email,
            password
        })
        .then(res => {
            // console.log(res.headers.token)
            localStorage.setItem("token",res.headers.token)
            toast.success('User Logged In Successfully')
            Navigation("/")
            
        }).catch(err => {
            // print exact error
            // window.alert(err.response.data)
            toast.error(err.response.data)
            // console.log(err.response.data)
        })
    }
 

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form onSubmit={handleSubmit} >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email"
                                 name='email' 
                                 value={email} 
                 onChange={(e) => {
                    setEmail(e.target.value)
                    }
                   }
                                 placeholder="Enter email" 
                                 required/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password"
                                 name='password'
                                 value={password}
                    onChange={(e) => {
                    setPassword(e.target.value)
                    }
                   }
                                   placeholder="Password"
                                      required 
                                    />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Login
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login