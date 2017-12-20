import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer } from '../store';
import VoteStage from './VoteStage';


class NominationStage extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        if (this.props.order !== 1 && this.props.fascistPickPresident === false) {
            const currentPresidentIndex = this.props.players.findIndex(player => player.president === true);

            this.props.togglePresident(this.props.players[currentPresidentIndex]);

            if (this.props.players[currentPresidentIndex + 1]) {
                this.props.togglePresident(this.props.players[currentPresidentIndex + 1]);
            } else {
                this.props.togglePresident(this.props.players[0]);
            }
        }
    }
    render() {
        const { players, eligibleChancellors, president, togglePresident, toggleChancellor } = this.props;

        return (
            <div>
                <h1>{president.name} is the Presidential nominee</h1>
                <h3>{president.name} nominate a chancellor</h3>
                {
                    eligibleChancellors.map(player => {
                        return (
                            <li key={player.id}>
                                <button
                                    onClick={() => {
                                        toggleChancellor(player);
                                    }}>
                                    {player.name}
                                </button>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    const { players, selectedFascistCards, order } = state;
    const eligibleChancellors = players.filter(player => player.president === false && player.eligible === true);
    const president = players.find(player => player.president === true);
    const history = ownProps.history;
    return {
        players,
        order,
        selectedFascistCards,
        fascistPickPresident,
        eligibleChancellors,
        president,
        history
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        togglePresident(player) {
            player.president === false ? player.president = true : player.president = false;
            dispatch(putPlayer(player));
        },

        toggleChancellor(player) {
            player.chancellor === false ? player.chancellor = true : player.chancellor = false;
            dispatch(putPlayer(player));
            history.push('/vote-stage')
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NominationStage));