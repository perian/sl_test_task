import axios from 'axios';
import { getTournamentsAction, getMoreTournamentsAction, getTournamentSettingsAction } from '../actions/actions';

const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments`;

export const fetchTournaments = (page) => {
  return async function(dispatch) {
    const response = await axios.get(`${_baseUrl}?game=pubg4x4mobile&page=${page}`);

    dispatch(getTournamentsAction(response.data, page));
  }
}

export const fetchTournamentSettings = (id) => {
  return async function(dispatch) {
    const response = await axios.get(`${_baseUrl}/${id}/settings`);

    dispatch(getTournamentSettingsAction(response.data))
  }
}
