import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putPlayer, nextInOrder, addAllySelected, addFascistSelected, deleteCard } from '../store';


function VoteStage(props) {
    const { players, deck, successful, failure } = props
    const { cards } = deck;
    const previousChancellor = players.find(player => player.eligible === false);
    const president = players.find(player => player.president);
    const nominatedChancellor = players.find(player => player.chancellor && player.eligible);
    return (
        <div>
            <h1>Government Nominees</h1>
            <h1>President: {president.name}</h1>
            <h1>Chancellor: {nominatedChancellor.name}</h1>
            <button onClick={() => successful(nominatedChancellor, previousChancellor, cards)}>
                Successful Election
            </button>
            <button onClick={() => failure(nominatedChancellor)}>
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
        deck
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        successful(nominatedChancellor, previousChancellor, cards) {
            if (previousChancellor) {
                previousChancellor.eligible = true;
                previousChancellor.chancellor = false;
                dispatch(putPlayer(previousChancellor));
            }
            nominatedChancellor.eligible = false;
            dispatch(putPlayer(nominatedChancellor));
            dispatch(nextInOrder());

            const selectedCard = cards[0];
            if (selectedCard.suit === 0 || selectedCard.suit === 2) {
                dispatch(addAllySelected(selectedCard));
                dispatch(deleteCard(selectedCard));
            } else {
                dispatch(addFascistSelected(selectedCard));
                dispatch(deleteCard(selectedCard));
            }
            history.push('/card-draw');
        },
        failure(nominatedChancellor) {
            nominatedChancellor.chancellor = false;
            dispatch(putPlayer(nominatedChancellor));
            dispatch(nextInOrder());
            history.push('/nomination-stage');
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VoteStage));