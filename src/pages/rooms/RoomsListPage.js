import React, { Component } from 'react';
import RoomService from '../../services/RoomService';
import { Table } from 'react-bootstrap';

class RoomsListPage extends Component {

    roomService = new RoomService();

    state = { rooms: null }

    componentDidMount() {
        this.roomService.getRooms().then(data => {
            console.log('data', data);
            //this.setState({ rooms: resp.data });
        }).catch(err => {
            alert(err);
        });
    }

    render() {
        //console.log(this.props);
        return (
            <>
                <h1>Liste des salles</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Places</th>
                        </tr>
                    </thead>
                    {this.state.rooms ? (
                        <tbody>
                            {this.state.rooms.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price} €</td>
                                    <td>{item.seatCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (<></>)}
                </Table>
            </>
        );
    }
}

export default RoomsListPage;