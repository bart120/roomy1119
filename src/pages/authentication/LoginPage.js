import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class LoginPage extends Component {
    state = {};

    login = (user) => {
        console.log('login', user);
        // appel serveur
        sessionStorage.setItem('USER', JSON.stringify({ login: user.login }));
    }

    render() {
        return (
            <>
                <h2>Connexion</h2>
                <LoginForm onLogin={this.login} />
            </>
        );
    }
}

export default LoginPage;