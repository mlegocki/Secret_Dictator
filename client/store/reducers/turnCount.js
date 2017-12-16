import axios from 'axios';

const ENOUGH_PLAYERS = 'ENOUGH_PLAYERS';
const NOT_ENOUGH_PLAYERS = 'NOT_ENOUGH_PLAYERS';

// ACTIONS 

export function enoughPlayers() {
    const action = { type: ENOUGH_PLAYERS };
    return action;
};

export function notEnoughPlayers() {
    const action = { type: NOT_ENOUGH_PLAYERS };
    return action;
};

export function passEnoughPlayers() {

    return function thunk(dispatch) {
        return dispatch(enoughPlayers());
    };
};

export function failEnoughPlayers() {

    return function thunk(dispatch) {
        return dispatch(notEnoughPlayers());
    };
};



export default function reducer(state = false, action) {
    switch (action.type) {
        case ENOUGH_PLAYERS:
            return true;
        case NOT_ENOUGH_PLAYERS:
            return false;
        default:
            return state;
    };
};