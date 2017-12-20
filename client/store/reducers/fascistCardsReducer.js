import axios from 'axios';

const GET_FACIST_CARDS = 'GET_FACIST_CARDS';
const ADD_FASCIST_CARD = 'ADD_FASCIST_CARD';

// ACTIONS 

export function getFascistCards() {
    const action = { type: GET_FACIST_CARDS };
    return action;
};

export function addFascistCard(card) {
    const action = { type: ADD_FASCIST_CARD, card };
    return action;
};


export function fetchFascistCards() {
    return function thunk(dispatch) {
        return dispatch(getFascistCards());
    };
};

export function addFascistSelected(card) {
    return function thunk(dispatch) {
        return dispatch(addFascistCard(card));
    };
};

export default function reducer(state = [], action) {
    switch (action.type) {

        case GET_FACIST_CARDS:
            return state;

        case ADD_FASCIST_CARD:
            return [...state, action.card]

        default:
            return state;
    };
};