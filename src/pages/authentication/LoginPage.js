import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'C:/Users/vlecl/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { logon } from '../../redux/actions/AuthenticationActions';

class LoginPage extends Component {
    state = {};

    login = (user) => {
        console.log('login', user);
        // appel serveur
        //sessionStorage.setItem('USER', JSON.stringify({ login: user.login }));
        this.props.actions.actionLogin({ login: user.login });
    }

    render() {
        // console.log(this.props);
        return (
            <>
                <h2>Connexion</h2>
                <LoginForm onLogin={this.login} />
            </>
        );
    }
}

const mapActionsToProps = (payload) => ({
    actions: {
        actionLogin: bindActionCreators(logon, payload)
    }
})

export default connect(null, mapActionsToProps)(LoginPage);