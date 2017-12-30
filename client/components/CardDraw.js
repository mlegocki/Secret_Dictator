import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { putPlayer, pickedPresident, addAllySelected, addFascistSelected, deleteCard } from '../store';
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
        redCard,
        blackCard,
        fascistSpecialCards
    } = props;
    const president = players.find(player => player.president);
    return (
        <div>
            {
                <div>

                    <button onClick={() => redCard(deck, selectedFascistCards)}>
                        Fascist Policy
                    </button>
                    <button onClick={() => blackCard(deck, selectedAllyCards)}>
                        Liberal Policy
                    </button>
                </div>
            }
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
        redCard(deck, selectedFascistCards) {
            dispatch(addFascistSelected(deck.cards[deck.cards.length - 1]));
            dispatch(deleteCard(deck.cards[deck.cards.length - 1]));
        },
        blackCard(deck, selectedAllyCards) {
            dispatch(addAllySelected(deck.cards[0]));
            dispatch(deleteCard(deck.cards[0]));
        },
        fascistSpecialCards(players, president, selectedAllyCards, selectedFascistCards, fascistPickPresident) {
            if (selectedFascistCards.length === 0 || selectedFascistCards.length === 1) { 
                history.push('/nomination-stage');
            }
            else if (selectedFascistCards.length === 2) {
                alert(`${president.name} investigates another player's card`)
                history.push('/nomination-stage');
            }
            else if (fascistPickPresident === 0 && selectedFascistCards.length === 3) {
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
            } else if (selectedFascistCards.length === 4) {
                return (
                    <div>
                        {
                            players.map(player => {
                                if (!player.president) {
                                    <li key={player.id}>
                                        <button onClick={() => {
                                            dispatch(deletePlayer(player));
                                            history.push('/nomination-stage');
                                        }}>
                                            {player.name}
                                        </button>
                                    </li>
                                }
                            })
                        }
                    </div>
                )
            } else if (selectedFascistCards.length === 5) {
                return (
                    <div>
                        {
                            players.map(player => {
                                if (!player.president) {
                                    <li key={player.id}>
                                        <button onClick={() => {
                                            dispatch(deletePlayer(player));
                                            history.push('/nomination-stage');
                                        }}>
                                            {player.name}
                                        </button>
                                    </li>
                                }
                            })
                        }
                    </div>
                )
            }
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDraw));
