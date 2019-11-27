import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import RoomService from '../../services/RoomService';

class RoomsAddPage extends Component {

    roomService = new RoomService();

    state = {
        pictures: [
            { id: 'Calliope.jpg', name: 'Calliope' },
            { id: 'Pegase.jpg', name: 'Pegase' },
            { id: 'Thalie.jpg', name: 'Thalie' },
            { id: 'Persee.jpg', name: 'Persee' }
        ],
        room: {}
    }

    submit = (event) => {
        event.preventDefault();
        //console.log('room', this.state.room);
        this.roomService.addRoom(this.state.room).then(
            data => {
                alert(`La salle enregistée avec l'id ${data.id}`);
                this.props.history.push('/rooms');
            }
        )
    }

    change = (event) => {
        this.setState({ room: Object.assign(this.state.room, { [event.target.name]: event.target.value }) });
    }

    render() {
        return (
            <>
                <h1>Ajouter une salle</h1>
                <Form noValidate onSubmit={this.submit}>
                    <Form.Group>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.change} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Prix</Form.Label>
                        <Form.Control type="number" name="price" onChange={this.change} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre de place</Form.Label>
                        <Form.Control type="number" name="seatCount" onChange={this.change} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control name="image" as="select" onChange={this.change} >
                            {this.state.pictures.map(p =>
                                (<option key={p.id} value={p.id}>{p.name}</option>)
                            )}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Enregistrer</Button>
                </Form>
            </>
        );
    }
}

export default RoomsAddPage;