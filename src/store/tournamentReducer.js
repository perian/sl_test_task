const defaultState = {
  data: {},
}

const ADD_TOURNAMENT_SETTINGS = 'ADD_TOURNAMENT_SETTINGS';

export const tournamentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT_SETTINGS:
      return {...state, data: action.payload}
    default:
      return state;
  }
}
