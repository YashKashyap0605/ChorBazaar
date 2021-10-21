import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../static/css/Header.css";

const Header = (props) => {
    return (
        <Navbar id="Navbar" className="navbar_main_container" bg="dark" expand="lg">
            <Navbar.Brand className="navLinks" href="/"> ChorBazaar </Navbar.Brand>
            <Navbar.Toggle id="navbar_toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navLinks" href="/"> Home </Nav.Link>
                    <Nav.Link className="navLinks" href="/products" > All Products </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/coats"> Coats </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/shirts"> T-Shirts </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/shoes"> Shoes </Nav.Link>
                    <Nav.Link className="navLinks" href="/products/watches"> Watches </Nav.Link>
                    <Nav.Link className="navLinks" href="/shopping-cart" >  Cart </Nav.Link>
                    <Nav.Link className="navLinks" href="/admin" >  Admin </Nav.Link>
                    <Nav.Link className="navLinks" href="/Manage_Account" >  Manage Your Account </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;