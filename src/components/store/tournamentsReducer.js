const defaultState = {
  tournaments: [],
  dataLimit: false,
}

const ADD_TOURNAMENTS = 'ADD_TOURNAMENTS';

export const tournamentsReducer = (state = defaultState, payload) => {

  switch (payload.type) {
    case ADD_TOURNAMENTS:
      return {...state, 
              tournaments: [...state.tournaments, ...payload.data], 
              dataLimit: payload.data.length < 20 ? defaultState.dataLimit = true : defaultState.dataLimit = false,
            }
    default:
      return state;
  }
}

export const getTournamentsAction = (data) => (
  {type: ADD_TOURNAMENTS, data}
)

