import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import store, { fetchPlayers } from '../store';
import NewGame from './NewGame';
import StartGame from './StartGame';
import NominationStage from './NominationStage';

export default class Main extends Component {
    componentDidMount() {
        const updatePlayersThunk = fetchPlayers();
        store.dispatch(updatePlayersThunk);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/start-game" component={StartGame} />
                    <Route path="/nomination-stage" component={NominationStage} />
                    <Route exact path="/" component={NewGame} />
                </Switch>
            </div>
        );
    }
}