import { getTournamentsAction } from "../store/tournamentsReducer";

  const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments?game=pubg4x4mobile&page=1&per_page=20`;

export const fetchTournaments = () => {
  return function(dispatch) {
    fetch(_baseUrl)
      .then(response => response.json())
      .then(json => dispatch(getTournamentsAction(json)))
  }
}
