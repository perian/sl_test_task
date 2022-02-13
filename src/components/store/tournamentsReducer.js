const defaultState = {
  all: [],
  isOutOfData: false,
  tournamentSettings: null,
  pageNumber: 2,
  filteredTournaments: null
}

const ADD_TOURNAMENTS = 'ADD_TOURNAMENTS';
const ADD_MORE_TOURNAMENTS = 'ADD_MORE_TOURNAMENTS';
const ADD_FILTERED_TOURNAMENTS = 'ADD_FILTERED_TOURNAMENTS';
const ADD_TOURNAMENT_SETTINGS = 'ADD_TOURNAMENT_SETTINGS';

export const tournamentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENTS:
      return {...state, 
              all: state.all.length ? [...state.all] : action.payload
            }
    case ADD_MORE_TOURNAMENTS:
      return {...state, 
              all: [...state.all, ...action.payload],
              isOutOfData: action.payload.length < 20 ? state.isOutOfData = true : state.isOutOfData = false,
              pageNumber: ++state.pageNumber
            }
    case ADD_TOURNAMENT_SETTINGS:
      return {...state, tournamentSettings: action.payload}
    case ADD_FILTERED_TOURNAMENTS:
      return {...state, all: action.payload}
    default:
      return state;
  }
}

