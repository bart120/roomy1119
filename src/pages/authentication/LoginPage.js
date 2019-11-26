import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class LoginPage extends Component {
    state = {};
    render() {
        return (
            <>
                <h2>Connexion</h2>
                <LoginForm />
            </>
        );
    }
}

export default LoginPage;