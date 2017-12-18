import axios from 'axios';

const GET_CARDS = 'GET_CARDS';
const ADD_CARD = 'ADD_CARD';

// ACTIONS 

export function getFascistCards() {
    const action = { type: GET_CARDS };
    return action;
};

export function addFascistCard(card) {
    const action = { type: ADD_CARD, card };
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

        case GET_CARDS:
            return state;

        case ADD_CARD:
            return [...state, action.card]

        default:
            return state;
    };
};