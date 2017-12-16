import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer, updateOrder } from '../store';


function StartGame(props) {
    const { players, handleClick } = props;
    const firstPresident = players[Math.round(players.length * Math.random())];
    return (
        <div>
            <h1>Let's Begin...</h1>
            <button onClick={() => handleClick(firstPresident)}>Ready to proceed</button>
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
    const { history } = ownProps;
    return {
        handleClick(player) {
            player.president = 'Yes';
            dispatch(putPlayer(player));
            dispatch(updateOrder());
            history.push('/nomination-stage');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartGame));