import axios from 'axios';

const PICKED_PRESIDENT = 'PICKED_PRESIDENT';

// ACTIONS 

export function assignPresident() {
    const action = { type: PICKED_PRESIDENT };
    return action;
};

export function pickedPresident() {

    return function thunk(dispatch) {
        return dispatch(assignPresident());
    };
};


export default function reducer(state = false, action) {
    switch (action.type) {

        case PICKED_PRESIDENT:
            return true;

        default:
            return state;
    };
};