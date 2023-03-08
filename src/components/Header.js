import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/products" className="text-decoration-none text-light mx-2">Products</NavLink>
                        <NavLink to="/product" className="text-decoration-none text-light  mx-2">Product</NavLink>
                        <NavLink to="/trending" className="text-decoration-none text-light  mx-2">Trending</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light  mx-2">About Us</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light  mx-2">Contact Us</NavLink>

                        <div style={{marginLeft:550}}>
                        <NavLink to="/Register" className="text-decoration-none text-light  mx-5">SignIn</NavLink>
                        <NavLink to="/logout" className="text-decoration-none text-light  mx-2">Logout</NavLink>
                        </div>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header