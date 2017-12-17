import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer, nextInOrder } from '../store';


function VoteStage(props) {
    const { players, successful, failure, history } = props
    const president = players.find(player => player.president);
    const chancellor = players.find(player => player.chancellor);
    return (
        <div>
            <h1>Government Nominees</h1>
            <h1>President: {president.name}</h1>
            <h1>Chancellor: {chancellor.name}</h1>
            <button onClick={() => successful(chancellor)}>
                Successful Election
            </button>
            <button onClick={() => failure(chancellor)}>
                Failed Election
            </button>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    const { players } = state;
    const { history } = ownProps;
    return {
        players,
        history
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        successful(player) {
            player.eligible = false;
            dispatch(putPlayer(player));
            dispatch(nextInOrder());
            history.push('/card-draw');
        },
        failure(player) {
            player.chancellor = false;
            dispatch(putPlayer(player));
            dispatch(nextInOrder());
            history.push('/nomination-stage');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VoteStage));