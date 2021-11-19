import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo2.png';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navigation-bar" bg="primary" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <img className="img-fluid" src={logo} alt="" />
                    <Navbar.Brand to="/home" as={Link} className="fw-bold nav-menu ms-5 text-light" > Hero Moto</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link}
                            className="fw-bold nav-menu text-light"
                            to="/home"
                            style={{ color: '#163336' }}
                        >Home</Nav.Link>

                        <Nav.Link as={Link}
                            className="fw-bold nav-menu text-light"
                            to="/products"
                            style={{ color: '#163336' }}
                        >Explore</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    style={{ color: '#163336' }}
                                    className="fw-bold nav-menu text-light" 
                                >Login</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/dashboard"
                                    className="fw-bold nav-menu text-light"
                                    style={{ color: '#163336' }}
                                >Dashboard</Nav.Link>

                                <li
                                    as={Link}
                                    onClick={logOut}
                                    className="fw-bold nav-menu text-light"
                                    style={{ listStyle: "none", cursor: "pointer" }}
                                >Logout</li>

                                <Navbar.Text className="text-light ms-3 text-wrap w-25">
                                <small>
                                <img
                                            style={{
                                                width: "30px",
                                                borderRadius: "50%",
                                            }}
                                            src={user?.photoURL}
                                            alt=""
                                        /> <br />{user?.displayName}
                                        <br />
                                        {user?.email}
                                </small>
                                </Navbar.Text>
                                            
                            </>
                            
                        )}
                        

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Menubar;

