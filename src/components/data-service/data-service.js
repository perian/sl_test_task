import { getTournamentsAction, getMoreTournamentsAction, getTournamentSettingsAction } from '../actions/actions';
import axios from 'axios';

const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments`;

export const fetchTournaments = (page = 1) => {
  try {
    return async function(dispatch) {
      const response = await axios.get(`${_baseUrl}?game=pubg4x4mobile&page=${page}`);

      dispatch(getTournamentsAction(response.data));
    } 
  } catch (error) {
    console.log(error);
  }
}

export const fetchMoreTournaments = (page) => {
  try {
    return async function(dispatch) {
      const response = await axios.get(`${_baseUrl}?game=pubg4x4mobile&page=${page}`);
  
      dispatch(getMoreTournamentsAction(response.data));
    } 
  } catch (error) {
    console.log(error);
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

// import { getTournamentsAction, getTournamentSettingsAction } from '../actions/actions';

// const _baseUrl = `https://api.gamestars.tv/streamly/v2/tournaments`;

// export const fetchTournaments = (page = 1) => {
//   try {
//     return async function(dispatch) {
//       const response = await axios.get(`${_baseUrl}?game=pubg4x4mobile&page=${page}`);
  
//       dispatch(getTournamentsAction(response.data));
//     } 
//   } catch (error) {
//     console.log(error);
//   }
// }

// export const fetchTournamentSettings = (id) => {
//   try {
//     return async function(dispatch) {
//       const response = await axios.get(`${_baseUrl}/${id}/settings`);
  
//       dispatch(getTournamentSettingsAction(response.data))
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }