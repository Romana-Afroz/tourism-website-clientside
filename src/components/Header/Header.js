import React, { useEffect, useState } from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from "../../images/logo.png";
import photoURL from "../../images/user.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Header = (props) => {
    const { card } = props;
    console.log(card);

    const [services, setServices] = useState([])
    const { user,logOut } = useAuth();
    const email = user?.email;
    useEffect(() => {
        fetch(`https://tour-planner.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [email]);

   
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} width="90" height="30" className="d-inline-block align-top" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageOrders">Manage Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/addnew">Add Service</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={NavLink} to="/myorder" className="text-white">
                            <FontAwesomeIcon
                                style={{ fontSize: "20px" }}
                                icon={faShoppingCart}
                            />
                            <Badge>{services.length}</Badge>
                        </Nav.Link>

                        {!user.email ?
                            < Nav.Link as={Link} to="/login">Login</Nav.Link> :
                            <NavDropdown
                                title={
                                    <img
                                        style={{
                                            width: "45px",
                                            borderRadius: "50%",
                                        }}
                                        src={photoURL}
                                        alt=""
                                    />
                                }
                            >
                                <div className="text-center">
                                    <h6>{user?.displayName}</h6>
                                    <p className="m-0 mb-2">{email}</p>
                                    <Nav.Link as={HashLink} to="/myorder">My Order</Nav.Link>
                                    <button onClick={logOut} className="btn btn-primary">
                                        Sign Out
                                    </button>
                                </div>
                            </NavDropdown>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;



