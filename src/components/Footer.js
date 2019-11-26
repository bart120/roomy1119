import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Footer extends Component {

    state = { rooms: null }

    componentDidMount() {
        console.log('componentdidmount');
        this.setState({
            rooms: [
                { name: 'Calliope', image: 'Calliope.jpg' },
                { name: 'Pegase', image: 'Pegase.jpg' },
                { name: 'Thalie', image: 'Thalie.jpg' }
            ]
        });
    }

    render() {
        console.log('render');
        return (
            this.state.rooms ? (
                <>
                    <h3>TOP {this.state.rooms.length}</h3>
                    <Row>
                        {this.state.rooms.map((item, index) => (
                            <Col key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`/images/${item.image}`} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>) : (<></>)
        );
    }

    componentDidUpdate() {
        console.log('componentdidupdate');
    }
}

export default Footer;