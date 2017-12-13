import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import store, { fetchPlayers } from '../store';
import NewGame from './NewGame';

export default class Main extends Component {
    componentDidMount() {
        const updatePlayersThunk = fetchPlayers();
        store.dispatch(updatePlayersThunk);
    }
    render() {
        return (
            <div>
                <Route path="/" component={NewGame} />
            </div>
        );
    }
}