import axios from 'axios';
import Deck from 'deck-of-cards';

// INITIALIZE DECK OF CARDS

const deck = Deck();

const GET_DECK = 'GET_DECK';
const REMOVE_CARD = 'REMOVE_CARD';

// ACTIONS 

export function getDeck() {
    const action = { type: GET_DECK };
    return action;
};

export function removeCard(cardId) {
    const action = { type: REMOVE_CARD, cardId };
    return action;
};

export function fetchDeck() {
    return function thunk(dispatch) {
        return dispatch(getDeck());
    };
};

export function deleteCard(card) {
    return function thunk(dispatch) {
        return dispatch(removeCard(card.i));
    };
};

export default function reducer(state = deck, action) {
    switch (action.type) {

        case GET_DECK:
            return state;

        case REMOVE_CARD:
            state.cards = state.cards.filter(card => card.i !== action.cardId);
            return state;

        default:
            return state;
    };
};