import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import InputValidate from './InputValidate';
import { PropTypes } from 'prop-types';

class LoginForm extends Component {


    static propTypes = {
        onLogin: PropTypes.func
    }

    state = {
        login: 'test@gmail.com',
        password: 'Toto007$',
        valid: true,
        errors: {
            errorLogin: '',
            errorPassword: ''
        }
    }

    onChange = (event) => {
        // console.log('this', this);
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state);
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.validate()) {
            //alert('OK');
            if (this.props.onLogin) {
                this.props.onLogin({ login: this.state.login, password: this.state.password });
            }
        }
    }

    validate = () => {
        let valid = true;
        this.setState({
            errors: {
                errorLogin: '',
                errorPassword: ''
            }
        });
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;

        if (!regEmail.test(this.state.login)) {
            valid = false;
            this.setState({ errors: Object.assign(this.state.errors, { errorLogin: `Le mail n'est pas au bon format` }) });
        }
        if (!regPassword.test(this.state.password)) {
            valid = false;
            /*const errors = this.state.errors;
            errors.errorPassword = `Le mot de passe n'est pas au bon format`;
            this.setState({ errors: errors });*/
            this.setState({ errors: Object.assign(this.state.errors, { errorPassword: `Le mot de passe n'est pas au bon format` }) });
        }
        this.setState({ valid });
        return valid;
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} noValidate>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <InputValidate type="email" name="login" placeholder="Votre email" onChange={this.onChange}
                        valid={this.state.errors.errorLogin === ''} value={this.state.login} />
                    {this.state.errors.errorLogin !== '' ? (
                        <Form.Text className="text-muted alert alert-danger">
                            {this.state.errors.errorLogin}
                        </Form.Text>) : (<></>)}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <InputValidate type="password" name="password" placeholder="Votre mot de passe" onChange={this.onChange}
                        valid={this.state.errors.errorPassword === ''} value={this.state.password} />
                    {this.state.errors.errorPassword !== '' ? (
                        <Form.Text className="text-muted alert alert-danger">
                            {this.state.errors.errorPassword}
                        </Form.Text>) : (<></>)}
                </Form.Group>

                <Button variant="primary" type="submit">Se connecter</Button>
            </Form>
        );
    }
}

export default LoginForm;