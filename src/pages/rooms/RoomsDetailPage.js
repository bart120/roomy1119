import React, { Component } from 'react';
import RoomService from '../../services/RoomService';
import { Card } from 'react-bootstrap';

class RoomsDetailPage extends Component {

    serviceRoom = new RoomService();

    state = { room: null }

    componentDidMount() {
        //console.log('props', this.props);
        this.serviceRoom.getRoomById(this.props.match.params.id).then(data => this.setState({ room: data }));
    }

    render() {
        return (
            this.state.room !== null ? (
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={`/images/${this.state.room.image}`} />
                    <Card.Body>
                        <Card.Title>{this.state.room.name}</Card.Title>
                        <Card.Text>
                            {this.state.room.price} €
                    </Card.Text>
                    </Card.Body>
                </Card>) : (<></>)
        );
    }
}

export default RoomsDetailPage;