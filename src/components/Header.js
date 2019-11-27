import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
    render() {
        //        console.log('prosp', this.props);
        const { t } = this.props;
        //const t = this.props.t;
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Roomy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">{t('header.home')}</Link>
                        <Link to="/rooms" className="nav-link">{t('header.rooms')}</Link>
                        <Link to="/rooms/add" className="nav-link">{t('header.add')}</Link>
                    </Nav>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/login" className="nav-link">{t('header.logon')}</Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withTranslation()(withRouter(Header));