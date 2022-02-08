const defaultState = {
  all: [],
  dataLimit: false,
  tournamentSettings: null,
  pageNumber: 1
}

const ADD_TOURNAMENTS = 'ADD_TOURNAMENTS';
const ADD_TOURNAMENT_SETTINGS = 'ADD_TOURNAMENT_SETTINGS';

export const tournamentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENTS:
      return {...state, 
              all: [...state.all, ...action.payload], 
              dataLimit: action.payload.length < 20 ? defaultState.dataLimit = true : defaultState.dataLimit = false,
              pageNumber: ++defaultState.pageNumber
            }
    case ADD_TOURNAMENT_SETTINGS:
      return {...state, 
              tournamentSettings: action.payload,
      }
    default:
      return state;
  }
}

export const getTournamentsAction = (payload) => (
  {type: ADD_TOURNAMENTS, payload}
)

export const getTournamentSettingsAction = (payload) => (
  {type: ADD_TOURNAMENT_SETTINGS, payload}
)

