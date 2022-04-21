import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo2 from '../../images/logo2.png'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ height: "40px" }} src={logo2} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <CustomLink className='text-decoration-none me-5' to='/cart' >Cart</CustomLink>
                            <CustomLink className='text-decoration-none me-5' to='/login'>Login</CustomLink>
                            <CustomLink className='text-decoration-none' to="/signup">
                                Sign Up
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;