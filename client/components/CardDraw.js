import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteCard, addSelected } from '../store';
/*
-----LEGEND-----

SUIT:
0 = SPADES
1 = HEARTS
2 = CLUBS
3 = DIAMONDS

RANK:
1 = ACE
13 = KING

*/

function CardDraw(props) {
    const { players, deck, randomSelect } = props;
    return (
        <div>
            {randomSelect(deck.cards)}
        </div>
    )
}

const mapStateToProps = function (state) {
    const { players, deck } = state;
    return {
        players,
        deck
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        randomSelect(cards) {
            const selectedCard = cards[Math.round((cards.length - 1) * Math.random())];
            dispatch(deleteCard(selectedCard));
            dispatch(addSelected(selectedCard));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDraw));