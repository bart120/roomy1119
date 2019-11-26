import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginForm extends Component {

    state = {
        login: '',
        password: '',
        valid: true
    }



    onChange = (event) => {
        // console.log('this', this);
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    onSubmit = (event) => {
        event.preventDefault();

    }

    validate = () => {
        let valid = true;
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;



    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} noValidate>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="login" placeholder="Votre email" onChange={this.onChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Votre mot de passe" onChange={this.onChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Se connecter</Button>
            </Form>
        );
    }
}

export default LoginForm;