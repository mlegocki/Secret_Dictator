import axios from 'axios';

const GET_CARDS = 'GET_CARDS';
const ADD_CARD = 'ADD_CARD';

// ACTIONS 

export function getAllyCards() {
    const action = { type: GET_CARDS };
    return action;
};

export function addAllyCard(card) {
    const action = { type: ADD_CARD, card };
    return action;
};


export function fetchAllyCards() {
    return function thunk(dispatch) {
        return dispatch(getAllyCards());
    };
};

export function addAllySelected(card) {
    return function thunk(dispatch) {
        return dispatch(addAllyCard(card));
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