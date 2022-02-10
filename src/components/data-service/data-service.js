import { getTournamentsAction, getTournamentSettingsAction } from "../store/tournamentsReducer";
const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments`;

export const fetchTournaments = (page) => {
  return function(dispatch) {
    fetch(`${_baseUrl}?game=pubg4x4mobile${page}`)
      .then(response => response.json())
      .then(json => {
        dispatch(getTournamentsAction(json))
      })
  }
}

export const fetchTournamentSettings = (id) => {
  return function(dispatch) {
    fetch(`${_baseUrl}/${id}/settings`)
      .then(response => response.json())
      .then(json => {
        dispatch(getTournamentSettingsAction(json))
      })
  }
}

// export const fetchTournamentsAll = () => {
//   return function(dispatch) {
//     fetch(`https://api.gamestars.tv/streamly/v2/tournaments?game=pubg4x4mobile&page=1`)
//       .then(response => response.json())
//       .then(json => {
//         dispatch(getTournamentsAction(json))
//       })
//   }
// }