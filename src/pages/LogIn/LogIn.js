import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import './LogIn.css'

const LogIn = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location?.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <Container>
            <div className="login-form">
                <h2>LogIn Form</h2>
                <p>Only Google SignIn Button work. Form doesnot work.</p>
                <Form >
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <p>New User? <Link to="/registration">Create Account</Link></p>
                <div>----------------- or ---------------</div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </Container>
    );
};

export default LogIn;