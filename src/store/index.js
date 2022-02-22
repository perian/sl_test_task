import { createStore, combineReducers, applyMiddleware } from "redux";
import { tournamentsReducer } from "./tournamentsReducer";
import { tournamentReducer } from "./tournamentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadState, saveState } from "../localStorage";
import throttle from "lodash/throttle";

export const persistedState = loadState();

const rootReducer = combineReducers({
  tournaments: tournamentsReducer,
  tournament: tournamentReducer,
  persistedState,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      searchByTitle: store.getState().tournaments.searchByTitle,
    });
  }, 500)
);