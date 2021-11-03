import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container id="home">
                    <Navbar.Brand href="#home">TRAVEL BD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navbar-link">
                            <HashLink className="nav-link" to="/home#home">Home</HashLink>
                            <HashLink className="nav-link" to="/home#packages">Tour Packages</HashLink>
                            <Link className="nav-link" to="/about">About</Link>
                            <HashLink className="nav-link" to="/home#contact">Contact</HashLink>
                        </Nav>
                        {
                            user?.email ?
                                <Link className="nav-link" to="/addpackages">Add Packages</Link>
                                :
                                <span></span>
                        }
                        {
                            user?.email ?
                                <Link className="nav-link" to="/myorders">My Orders</Link>
                                :
                                <span></span>
                        }
                        {
                            user?.email ?
                                <Link className="nav-link" to="/allorders">All Orders</Link>
                                :
                                <span></span>
                        }
                        {
                            user?.email ?
                                <Link to="/home">
                                    <button onClick={logOut} className="btn btn-dark">SignOut</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-dark">LogIn</button>
                                </Link>
                        }
                        <span className="nav-link">{user?.displayName}</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Carousel */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/FWLHHs8/slider-1-1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/0nHd37R/slider-2-1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HFZC3TH/slider-3-1.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Header;