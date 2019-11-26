import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './conf/Routes';

class App extends Component {

  render() {

    return (
      <Container>
        <Router>
          <Header></Header>
          <Routes />
          <Footer></Footer>
        </Router>
      </Container>
    );
  }

  componentDidMount() {

  }
}

export default App;
