import axios from 'axios';
import Deck from 'deck-of-cards';

// INITIALIZE DECK OF CARDS

const deck = Deck();
const cards = deck.cards;

const GET_DECK = 'GET_DECK';
const REMOVE_CARD = 'REMOVE_CARD';

// ACTIONS 

export function getDeck() {
    const action = { type: GET_DECK };
    return action;
};

export function removeCard(card) {
    const action = { type: REMOVE_CARD, card };
    return action;
};

export function fetchDeck() {
    return function thunk(dispatch) {
        return dispatch(getDeck());
    };
};

export function deleteCard(card) {
    return function thunk(dispatch) {
        return dispatch(removeCard(card));
    };
};

export default function reducer(state = cards, action) {
    switch (action.type) {

        case GET_DECK:
            return state;

        case REMOVE_CARD:
            return state.filter(card => card !== action.card);

        default:
            return state;
    };
};