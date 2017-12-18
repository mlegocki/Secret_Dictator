import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer, nextInOrder, deleteCard, addSelected } from '../store';


function VoteStage(props) {
    const { players, deck, history, successful, failure } = props
    const { cards } = deck;
    const president = players.find(player => player.president);
    const chancellor = players.find(player => player.chancellor);
    return (
        <div>
            <h1>Government Nominees</h1>
            <h1>President: {president.name}</h1>
            <h1>Chancellor: {chancellor.name}</h1>
            <button onClick={() => successful(chancellor, cards)}>
                Successful Election
            </button>
            <button onClick={() => failure(chancellor)}>
                Failed Election
            </button>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    const { players, deck } = state;
    const { history } = ownProps;
    return {
        players,
        deck,
        history
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        successful(player, cards) {
            player.eligible = false;
            dispatch(putPlayer(player));
            dispatch(nextInOrder());
            
            const selectedCard = cards[0];
            dispatch(deleteCard(selectedCard));
            dispatch(addSelected(selectedCard));

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