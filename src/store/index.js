import { createStore, combineReducers, applyMiddleware } from "redux";
import { tournamentsReducer } from "./tournamentsReducer";
import { tournamentReducer } from "./tournamentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tournaments: tournamentsReducer,
  tournament: tournamentReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
