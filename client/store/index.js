import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import players from './reducers/playersReducer';
import selectedFascistCards from './reducers/fascistCardsReducer';
import selectedAllyCards from './reducers/allyCardsReducer';
import deck from './reducers/deckReducer';
import order from './reducers/orderReducer';
import toggle from './reducers/toggleReducer';

const rootReducer = combineReducers({
    players,
    selectedFascistCards,
    selectedAllyCards,
    deck,
    order,
    toggle
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export default store;

export * from './reducers/playersReducer';
export * from './reducers/fascistCardsReducer';
export * from './reducers/allyCardsReducer';
export * from './reducers/deckReducer';
export * from './reducers/orderReducer';
export * from './reducers/toggleReducer';