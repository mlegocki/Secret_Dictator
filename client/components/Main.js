import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import store, { fetchPlayers, getOrder } from '../store';
import NewGame from './NewGame';
import StartGame from './StartGame';
import NominationStage from './NominationStage';
import VoteStage from './VoteStage';
import CardDraw from './CardDraw';

export default class Main extends Component {
    componentDidMount() {
        store.dispatch(fetchPlayers());
        store.dispatch(getOrder());
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/start-game" component={StartGame} />
                    <Route path="/nomination-stage" component={NominationStage} />
                    <Route path="/vote-stage" component={VoteStage} />
                    <Route path="/card-draw" component={CardDraw} />
                    <Route exact path="/" component={NewGame} />
                </Switch>
            </div>
        );
    }
}