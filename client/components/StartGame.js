import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer, updateOrder } from '../store';


function StartGame(props) {
    const { players, handleClick, history } = props;
    const firstPresident = players[Math.round(players.length * Math.random())];
    return (
        <div>
            <h1>Let's Begin...</h1>
            <button onClick={() => {
                handleClick(firstPresident);
                history.push('/nomination-stage');
            }}>
                Ready to proceed
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
    return {
        handleClick(player) {
            player.president = 'Yes';
            dispatch(putPlayer(player));
            dispatch(updateOrder());
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartGame));