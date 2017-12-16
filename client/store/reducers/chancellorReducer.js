import axios from 'axios';

const GET_CHANCELLOR = 'GET_CHANCELLOR;
const UPDATE_CHANCELLOR = 'UPDATE_CHANCELLOR';

// ACTIONS 

export function getChancellor(chancellor) {
    const action = { type: GET_CHANCELLOR, chancellor };
    return action;
};

export function updateChancellor(nominee) {
    const action = { type: UPDATE_CHANCELLOR, nominee };
    return action;
};

export function fetchChancellor() {
    return function thunk(dispatch) {
        return dispatch(getChancellor(chancellor));
    };
};

export function postChancellor(nominee) {
    return function thunk(dispatch) {
        return dispatch(updateChancellor(nominee));
    };
};

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_CHANCELLOR:
            return action.chancellor;

        case UPDATE_CHANCELLOR:
            return action.nominee;
            
        default: 
            return state;
    };
};