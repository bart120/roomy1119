import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Roomy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Accueil</Link>
                        <Link to="/rooms" className="nav-link">Salles</Link>
                        <Link to="/rooms/add" className="nav-link">Ajouter</Link>
                    </Nav>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/login" className="nav-link">Se connecter</Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;