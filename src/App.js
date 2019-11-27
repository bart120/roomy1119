import React, { Component, Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './conf/Routes';
import { Spinner } from 'react-bootstrap';
import './conf/translation';
import i18next from 'i18next';

class App extends Component {

  render() {

    return (
      <Container>
        <Router>
          <Header></Header>
          <Suspense fallback={(<Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>)}>
            <Routes />
          </Suspense>
          <Footer></Footer>
        </Router>
      </Container>
    );
  }

  componentDidMount() {
    const browserLanguage = navigator.language || navigator.userLanguage;
    console.log('lang', browserLanguage);
    i18next.changeLanguage(browserLanguage.split('-')[0]);
    this.setState({});
  }
}

export default App;
