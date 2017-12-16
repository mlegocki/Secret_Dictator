import axios from 'axios';

const GET_PRESIDENT = 'GET_PRESIDENT';
const UPDATE_PRESIDENT = 'UPDATE_PRESIDENT';

// ACTIONS 

export function getPresident(president) {
    const action = { type: GET_PRESIDENT, GET_PRESIDENT };
    return action;
};

export function updatePresident(nominee) {
    const action = { type: UPDATE_PRESIDENT, nominee };
    return action;
};

export function fetchChancellor() {
    return function thunk(dispatch) {
        return dispatch(getPresident(president));
    };
};

export function postChancellor(nominee) {
    return function thunk(dispatch) {
        return dispatch(updatePresident(nominee));
    };
};

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_PRESIDENT:
            return action.president;

        case UPDATE_PRESIDENT:
            return action.nominee;
            
        default: 
            return state;
    };
};