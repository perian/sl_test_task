import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tournamentsReducer } from './tournamentsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tournaments: tournamentsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
