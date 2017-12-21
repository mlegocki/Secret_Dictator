import axios from 'axios';

const PICKED_PRESIDENT = 'PICKED_PRESIDENT';

// ACTIONS 

export function assignPresident(turns) {
    const action = { type: PICKED_PRESIDENT, turns };
    return action;
};

export function pickedPresident(turns) {

    return function thunk(dispatch) {
        return dispatch(assignPresident(turns));
    };
};


export default function reducer(state = 0, action) {
    switch (action.type) {

        case PICKED_PRESIDENT:
            return action.turns;

        default:
            return state;
    };
};