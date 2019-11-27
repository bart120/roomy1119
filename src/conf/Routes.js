import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RoomsListPage from '../pages/rooms/RoomsListPage';
import RoomsAddPage from '../pages/rooms/RoomsAddPage';
import LoginPage from '../pages/authentication/LoginPage';
import RoomsDetailPage from '../pages/rooms/RoomsDetailPage';

class Routes extends Component {
    render() {
        return (
            <>
                <Route path='/' exact component={HomePage} />
                <Route path='/rooms' exact component={RoomsListPage} />
                <Route path='/rooms/add' exact component={RoomsAddPage} />
                <Route path='/room/:id' exact component={RoomsDetailPage} />
                <Route path='/login' exact component={LoginPage} />
            </>
        );
    }
}

export default Routes;