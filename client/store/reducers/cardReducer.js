import axios from 'axios';

const GET_CARDS = 'GET_CARDS';
const REMOVE_CARD = 'REMOVE_CARD';

// ACTIONS 

export function getPlayers(players) {
    const action = { type: GET_PLAYERS, players };
    return action;
};

export function addPlayer(player) {
    const action = { type: ADD_PLAYER, player };
    return action;
};

export function updatePlayer(updatedPlayer) {
    const action = { type: UPDATE_PLAYER, updatedPlayer };
    return action;
};

export function removePlayer(playerToRemove) {
    const action = { type: REMOVE_PLAYER, playerToRemove };
    return action;
};

export function removeAllPlayers() {
    const action = { type: REMOVE_ALL_PLAYERS };
    return action;
};

export function fetchPlayers() {
    return function thunk(dispatch) {
        return axios.get('/api/players')
            .then(res => res.data)
            .then(players => dispatch(getPlayers(players)));
    };
};

export function postPlayer(player) {
    return function thunk(dispatch) {
        return axios.post("/api/players", player)
            .then(res => res.data)
            .then(addedPlayer => dispatch(addPlayer(addedPlayer)));
    };
};

export function putPlayer(player) {
    return function thunk(dispatch) {
        return axios.put(`/api/players/${player.id}`, player)
            .then(res => res.data)
            .then(updatedPlayer =>
                dispatch(updatePlayer(updatedPlayer))
            );
    };
};

export function deletePlayer(deletedPlayer) {
    return function thunk(dispatch) {
        return axios.delete(`/api/players/${deletedPlayer.id}`)
            .then(() => dispatch(removePlayer(deletedPlayer)));
    };
};

export function deleteAllPlayers() {
    return function thunk(dispatch) {
        return axios.delete('/api/players')
            .then(() => dispatch(removeAllPlayers()));
    };
};

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_PLAYERS:
            return action.players;

        case ADD_PLAYER:
            return [...state, action.player];

        case UPDATE_PLAYER:
            return state.map(player => player.id !== action.updatedPlayer.id
                ? player : action.updatedPlayer);

        case REMOVE_PLAYER:
            return state.filter(player => player.id !== action.playerToRemove.id);

        case REMOVE_ALL_PLAYERS:
            return [];

        default:
            return state;
    };
};