import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { } from '../store';
import VoteStage from './VoteStage';


function NominationStage(props) {
    const { players, selectFirstPresident, assignNominee } = props;
    const president = players[selectFirstPresident(players)];
    const others = players.filter(player => player.id !== president.id);
    const nominee;
    return (
        <div>
            <h1>{president.name} is the first Presidentent nominee</h1>
            <h3>{president.name} nominate a chancellor</h3>
            {
                others.map(player => {
                    return (
                        <li key={player.id}>
                            <button onClick={() => }>
                                {player.name}
                            </button>
                        </li>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = function (state) {
    const { players } = state;
    return {
        players
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    console.log(ownProps);
    const { history } = ownProps;
    return {
        selectFirstPresident(players) {
            return Math.round(players.length * Math.random());
        },
        assignNominee(player) {
            return player;
            history.push('/vote-stage');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NominationStage));