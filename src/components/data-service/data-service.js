import { getTournamentsAction } from "../store/tournamentsReducer";

const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments?game=pubg4x4mobile`;

export const fetchTournaments = (id) => {
  return function(dispatch) {
    fetch(`${_baseUrl}${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.length)
        dispatch(getTournamentsAction(json))
      })
  }
}
