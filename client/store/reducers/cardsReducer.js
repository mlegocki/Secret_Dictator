import axios from 'axios';
import Deck from 'deck-of-cards';

const GET_CARDS = 'GET_CARDS';
const ADD_CARD = 'ADD_CARD';

// ACTIONS 

export function getCards() {
    const action = { type: GET_CARDS };
    return action;
};

export function addCard(card) {
    const action = { type: ADD_CARD, card };
    return action;
};


export function fetchCards() {
    return function thunk(dispatch) {
        return dispatch(getCards());
    };
};

export function addSelected(card) {
    return function thunk(dispatch) {
        return dispatch(addCard(card));
    };
};

export default function reducer(state = [], action) {
    switch (action.type) {

        case GET_CARDS:
            return state;

        case ADD_CARD:
            return [...state, action.card]

        default:
            return state;
    };
};