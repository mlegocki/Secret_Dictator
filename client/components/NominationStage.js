import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer } from '../store';
import VoteStage from './VoteStage';


class NominationStage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.order === 1) {
            const newPresident = this.props.players.find(player => player.president === 'Yes');
        } else {
            const currentPresidentIndex = this.props.players.findIndex(player => player.president === 'Yes');
            this.props.togglePresident(this.props.players[currentPresidentIndex]);
            if (this.props.players[currentPresidentIndex + 1]) {
                this.props.togglePresident(this.props.players[currentPresidentIndex + 1]);
            } else {
                this.props.togglePresident(this.props.players[0]);
            }
        }
    }
    render() {
        const { players, nonPresidentAO, newPresident, history, togglePresident, toggleChancellor } = this.props;

        return (
            <div>
                <h1>{newPresident.name} is the Presidential nominee</h1>
                <h3>{newPresident.name} nominate a chancellor</h3>
                {
                    nonPresidentAO.map(player => {
                        return (
                            <li key={player.id}>
                                <button
                                    onClick={() => {
                                        toggleChancellor(player);
                                        history.push('/vote-stage')
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
    const { players, order } = state;
    const nonPresidentAO = players.filter(player => player.president === 'No');
    const history = ownProps.history;
    const newPresident = players.find(player => player.president === 'Yes');
    return {
        players,
        order,
        nonPresidentAO,
        newPresident,
        history
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        togglePresident(player) {
            player.president === 'No' ? player.president = 'Yes' : player.president = 'No';
            dispatch(putPlayer(player));
        },
        toggleChancellor(player) {
            player.chancellor === 'No' ? player.chancellor = 'Yes' : player.chancellor = 'No';
            dispatch(putPlayer(player));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NominationStage));