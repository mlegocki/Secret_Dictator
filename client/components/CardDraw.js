import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { putPlayer, pickedPresident } from '../store';
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
    const {
        players,
        deck,
        selectedFascistCards,
        selectedAllyCards,
        fascistPickPresident,
        returnToVote,
        fascistSpecialCards
    } = props;
    const president = players.find(player => player.president);
    return (
        <div>
            <div>
                {
                    selectedAllyCards.map(card => {
                        return (
                            <li key={card.i}>
                                {card.i}
                            </li>
                        )
                    })
                }
            </div>
            <div>
                {
                    selectedFascistCards.map(card => {
                        return (
                            <li key={card.i}>
                                {card.i}
                            </li>
                        )
                    })
                }
            </div>
            {/* SPECIAL FASCIST CARD CASES */}
            <div>
                {fascistSpecialCards(players, president, selectedAllyCards, selectedFascistCards, fascistPickPresident)}
            </div>
            <button onClick={returnToVote}>
                Next Vote
            </button>
        </div>
    )
}

const mapStateToProps = function (state) {
    const { players, deck, selectedAllyCards, selectedFascistCards, fascistPickPresident } = state;
    return {
        players,
        deck,
        selectedAllyCards,
        selectedFascistCards,
        fascistPickPresident
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        returnToVote() {
            history.push('/nomination-stage');
        },
        fascistSpecialCards(players, president, selectedAllyCards, selectedFascistCards, fascistPickPresident) {
            if (fascistPickPresident === 0 && selectedFascistCards.length === 3) {
                return (
                    <div>
                        {
                            players.map(player => {
                                if (!player.president) {
                                    return (
                                        <li key={player.id}>
                                            <button onClick={() => {
                                                player.president = true;
                                                president.president = false;
                                                dispatch(pickedPresident((selectedFascistCards.length + selectedAllyCards.length)));
                                                history.push('/nomination-stage');
                                            }}>
                                                {player.name}
                                            </button>
                                        </li>
                                    );
                                }
                            })
                        }
                    </div>
                );
            }
            // const currentPresident = players.find(player => player.president);
            // currentPresident.president = false;
            // case 4: 
            // case 5:
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDraw));
