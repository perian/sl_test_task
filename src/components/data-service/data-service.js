import axios from 'axios';
import { getTournamentsAction, getTournamentSettingsAction } from '../actions/actions';

const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments`;

export const fetchTournaments = (page) => {
  try {
    return async function(dispatch) {
      const response = await axios.get(`${_baseUrl}?game=pubg4x4mobile&page=${page}`);
  
      dispatch(getTournamentsAction(response.data, page));
    } 
  } catch (error) {
    console.log(error);
  }
}

export const fetchTournamentSettings = (id) => {
  try {
    return async function(dispatch) {
      const response = await axios.get(`${_baseUrl}/${id}/settings`);
  
      dispatch(getTournamentSettingsAction(response.data))
    }
  } catch (error) {
    console.log(error);
  }
}
