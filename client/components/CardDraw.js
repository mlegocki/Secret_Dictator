import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteCard } from '../store';
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
    const { players, cards, randomSelect } = props;

    return (
        <div>
            {randomSelect(cards)}
        </div>
    )
}

const mapStateToProps = function (state) {
    const { players, cards } = state;
    return {
        players,
        cards
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        randomSelect(cards) {
            const selectedCard = cards[Math.round(cards.length * Math.random())];
            dispatch(deleteCard(selectedCard));
            dispatch(addSelected(selectedCard));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDraw));