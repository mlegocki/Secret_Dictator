import axios from 'axios';

const GET_ORDER = 'GET_ORDER';
const NEXT_IN_ORDER = 'NEXT_IN_ORDER';

// ACTIONS 

export function getOrder() {
    const action = { type: GET_ORDER };
    return action;
};

export function nextInOrder() {
    const action = { type: NEXT_IN_ORDER };
    return action;
};

export function fetchOrder() {

    return function thunk(dispatch) {
        return dispatch(getOrder());
    };
};

export function updateOrder() {

    return function thunk(dispatch) {
        return dispatch(nextInOrder());
    };
};



export default function reducer(state = 0, action) {
    switch (action.type) {

        case GET_ORDER:
            return state;

        case NEXT_IN_ORDER:
            return state + 1;

        default:
            return state;
    };
};