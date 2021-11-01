import React from 'react';
import './Footer.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    {/* <Col>
                        <h3>Ambulance Service</h3>
                        <p style={{ textAlign: "left" }}>Ambulance Service establish 2016. it is very popular Ambulance Service in Bangladesh </p>
                    </Col> */}
                    <Col>
                        <h3>About TRAVELBD</h3>
                        <hr className="hrborder" />
                        <Navbar>
                            <Nav style={{ display: "block" }}>
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">About Us</Nav.Link>
                                <hr className="aboutHrBorder" />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Contact Us</Nav.Link>
                                <hr className="aboutHrBorder" />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Site Map</Nav.Link>
                                <hr className="aboutHrBorder" />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Privacy Policy</Nav.Link>
                                <hr className="aboutHrBorder" />
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col>
                        <h3>Packages</h3>
                        <hr className="hrborder" />
                        <Navbar>
                            <Nav style={{ display: "block" }}>
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Holiday Package</Nav.Link>
                                <hr className="aboutHrBorder" />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Single day Package</Nav.Link>
                                <hr className="aboutHrBorder" />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">International Package</Nav.Link>
                                <hr className="aboutHrBorder" />
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col>
                        <h3>Contact Info</h3>
                        <hr className="hrborder" />
                        <h6 style={{ textAlign: "left", paddingTop: "20px" }}>info@travelbd.com.bd</h6>
                        <h6 style={{ textAlign: "left" }}>Call Us: 01945001001</h6>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="footer-copy">
                    <small>&copy; TravelBd Travels.All Rights Reserved</small>
                    <small>Developed By Mahedi</small>
                </div>
            </Container>
        </div>
    );
};

export default Footer;