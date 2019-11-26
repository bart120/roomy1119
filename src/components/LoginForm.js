import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginForm extends Component {

    state = {
        login: '',
        password: '',
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
        this.validate();
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
            this.setState({ errors: Object.assign(this.state.errors, { errorPassword: `Le mail n'est pas au bon format` }) });
        }
        this.setState({ valid });

    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} noValidate>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="login" placeholder="Votre email" onChange={this.onChange} />
                    {this.state.errors.errorLogin !== '' ? (
                        <Form.Text className="text-muted alert alert-danger">
                            {this.state.errors.errorLogin}
                        </Form.Text>) : (<></>)}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Votre mot de passe" onChange={this.onChange} />
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