import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { } from '../store';


function VoteStage(props) {
    const { players, successful, failure } = props
    const president = players.find(player => player.president === "Yes");
    const chancellor = players.find(player => player.chancellor === "Yes");
    return (
        <div>
            <h1>Government Nominees</h1>
            <h1>President: {president.name}</h1>
            <h1>Chancellor: {chancellor.name}</h1>
            <button onClick={successful}>Successful Election</button>
            <button onClick={failure}>Failed Election</button>

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
        successful(evt) {
            evt.preventDefault();
            handle.push('/card-draw');
        },
        failure(evt) {
            evt.preventDefault();
            handle.push('/nomination-stage');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VoteStage));