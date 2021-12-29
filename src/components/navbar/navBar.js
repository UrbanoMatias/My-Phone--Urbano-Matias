import React from "react";
import { CartWidget } from "../CartWidget/CardWidget";
import {  Container, Navbar, Nav, NavDropdown  } from "react-bootstrap";
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <header>
           <Navbar bg="light" expand="lg">
            <Container>
              <Link to="/" className="text-decoration-none"><Navbar.Brand>My Phone</Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <li><Link to="productos/samsung" className="btn">Samsung</Link></li>
                  <li><Link to="productos/motorola" className="btn">Motorola</Link></li>
                  <li><Link to="productos/lg" className="btn">LG</Link></li>   
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <CartWidget/>
            </Container>
            
          </Navbar>
        </header>
    )
}