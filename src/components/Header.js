import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../redux/actions/AuthenticationActions';

class Header extends React.Component {

    logout = () => {
        this.props.actions.actionLogout(null);
    }

    render() {
        // console.log('prosp', this.props);
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
                <Navbar.Collapse className="justify-content-end" style={{ color: '#fff' }}>
                    {this.props.user === null ?
                        (<Link to="/login" className="nav-link">{t('header.logon')}</Link>) :
                        (<>Bonjour {this.props.user.login} <Button onClick={this.logout}>Se déconnecter</Button> </>)}
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

const mapStateToProps = (stateStore) => ({
    isConnect: stateStore.isConnected,
    user: stateStore.user
});

const mapActionsToProps = (payload) => ({
    actions: {
        actionLogout: bindActionCreators(logout, payload)
    }
})

const head = withTranslation()(withRouter(Header));
export default connect(mapStateToProps, mapActionsToProps)(head);