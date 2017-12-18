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
    const { players, deck, selectedCards, randomSelect, drawCard } = props;
    return (
        <div>
            {
                selectedCards.map(card => {
                    return (
                        <li key={card.i}>
                            {card.i}
                        </li>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = function (state) {
    const { players, deck, selectedCards } = state;
    return {
        players,
        deck,
        selectedCards
    };
};

// const mapDispatchToProps = function (dispatch, ownProps) {
//     const { history } = ownProps;
//     return {
//     };
// };

export default withRouter(connect(mapStateToProps, null)(CardDraw));
