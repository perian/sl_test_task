const defaultState = {
  tournaments: []
}

const ADD_TOURNAMENTS = 'ADD_TOURNAMENTS';

export const tournamentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENTS:
      return {...state, tournaments: [...state.tournaments, ...action.data]}
    default:
      return state;
  }
}

export const getTournamentsAction = (data) => (
  {type: ADD_TOURNAMENTS, data}
);